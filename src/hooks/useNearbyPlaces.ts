import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface NearbyPlace {
  id: string;
  name: string;
  rating: number;
  userRatingsTotal: number;
  vicinity: string;
  types: string[];
  priceLevel: number; // -1 = unknown, 0 = free, 1-4 = cheap to expensive
  isOpen: boolean | null;
  lat: number;
  lng: number;
  photoRef: string | null;
  website: string | null;
  googleMapsUrl: string;
  phone: string | null;
}

// Map Google type to our category
export type PlaceCategory = "cafe" | "park" | "restaurant" | "mall" | "other";

export function getCategory(types: string[]): PlaceCategory {
  if (types.includes("cafe")) return "cafe";
  if (types.includes("park") || types.includes("campground") || types.includes("natural_feature")) return "park";
  if (types.includes("restaurant") || types.includes("food") || types.includes("meal_takeaway")) return "restaurant";
  if (types.includes("shopping_mall") || types.includes("department_store")) return "mall";
  return "other";
}

// Convert price_level to approximate ₹ range
export function priceLevelToRupees(level: number): number {
  switch (level) {
    case 0: return 0;
    case 1: return 100;
    case 2: return 250;
    case 3: return 400;
    case 4: return 500;
    default: return 250; // unknown
  }
}

interface UseNearbyPlacesOpts {
  lat: number | null;
  lng: number | null;
  type?: string;
  keyword?: string;
}

export function useNearbyPlaces({ lat, lng, type, keyword }: UseNearbyPlacesOpts) {
  return useQuery<NearbyPlace[]>({
    queryKey: ["nearby-places", lat, lng, type, keyword],
    enabled: lat !== null && lng !== null,
    staleTime: 5 * 60 * 1000,
    queryFn: async () => {
      const { data, error } = await supabase.functions.invoke("nearby-places", {
        body: { lat, lng, radius: 5000, type, keyword },
      });
      if (error) throw new Error(error.message);
      return data.places as NearbyPlace[];
    },
  });
}
