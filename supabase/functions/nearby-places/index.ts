import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const GOOGLE_PLACES_API_KEY = Deno.env.get("GOOGLE_PLACES_API_KEY");
    if (!GOOGLE_PLACES_API_KEY) {
      throw new Error("GOOGLE_PLACES_API_KEY is not configured");
    }

    const { lat, lng, radius = 3000, type, keyword } = await req.json();

    if (!lat || !lng) {
      return new Response(
        JSON.stringify({ error: "lat and lng are required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Use Google Places Nearby Search API
    const params = new URLSearchParams({
      location: `${lat},${lng}`,
      radius: String(radius),
      key: GOOGLE_PLACES_API_KEY,
    });

    if (type) params.set("type", type);
    if (keyword) params.set("keyword", keyword);

    const searchUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?${params}`;
    const searchRes = await fetch(searchUrl);
    const searchData = await searchRes.json();

    if (searchData.status !== "OK" && searchData.status !== "ZERO_RESULTS") {
      throw new Error(`Google Places API error: ${searchData.status} - ${searchData.error_message || ""}`);
    }

    // Map results to our format
    const places = (searchData.results || []).map((place: any) => ({
      id: place.place_id,
      name: place.name,
      rating: place.rating || 0,
      userRatingsTotal: place.user_ratings_total || 0,
      vicinity: place.vicinity || "",
      types: place.types || [],
      priceLevel: place.price_level ?? -1,
      isOpen: place.opening_hours?.open_now ?? null,
      lat: place.geometry?.location?.lat,
      lng: place.geometry?.location?.lng,
      photoRef: place.photos?.[0]?.photo_reference || null,
    }));

    // For each place, get details (website) — batch top 20
    const detailedPlaces = await Promise.all(
      places.slice(0, 20).map(async (place: any) => {
        try {
          const detailUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place.id}&fields=website,url,formatted_phone_number&key=${GOOGLE_PLACES_API_KEY}`;
          const detailRes = await fetch(detailUrl);
          const detailData = await detailRes.json();
          return {
            ...place,
            website: detailData.result?.website || null,
            googleMapsUrl: detailData.result?.url || `https://www.google.com/maps/place/?q=place_id:${place.id}`,
            phone: detailData.result?.formatted_phone_number || null,
          };
        } catch {
          return {
            ...place,
            website: null,
            googleMapsUrl: `https://www.google.com/maps/place/?q=place_id:${place.id}`,
            phone: null,
          };
        }
      })
    );

    return new Response(JSON.stringify({ places: detailedPlaces }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("Error:", message);
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
