import { MapPin, Star, ExternalLink, Navigation } from "lucide-react";
import type { NearbyPlace, PlaceCategory } from "@/hooks/useNearbyPlaces";
import { getCategory, priceLevelToRupees } from "@/hooks/useNearbyPlaces";

const categoryColors: Record<string, string> = {
  cafe: "bg-spot-cafe/15 text-spot-cafe",
  park: "bg-spot-park/15 text-spot-park",
  restaurant: "bg-spot-restaurant/15 text-spot-restaurant",
  mall: "bg-spot-mall/15 text-spot-mall",
  other: "bg-secondary text-secondary-foreground",
};

const categoryEmoji: Record<string, string> = {
  cafe: "☕",
  park: "🌳",
  restaurant: "🍽️",
  mall: "🛍️",
  other: "📍",
};

function distanceKm(lat1: number, lng1: number, lat2: number, lng2: number) {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.sin(dLng / 2) ** 2;
  return (R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))).toFixed(1);
}

interface SpotCardProps {
  place: NearbyPlace;
  index: number;
  userLat?: number;
  userLng?: number;
}

const SpotCard = ({ place, index, userLat, userLng }: SpotCardProps) => {
  const cat = getCategory(place.types);
  const price = priceLevelToRupees(place.priceLevel);
  const dist =
    userLat && userLng ? `${distanceKm(userLat, userLng, place.lat, place.lng)} km` : "";

  const linkUrl = place.website || place.googleMapsUrl;

  return (
    <a
      href={linkUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="animate-fade-up group block rounded-2xl border bg-card p-5 shadow-sm transition-shadow duration-300 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none active:scale-[0.97]"
      style={{ animationDelay: `${(index % 6) * 80 + 100}ms` }}
    >
      {/* Header row */}
      <div className="mb-3 flex items-start justify-between">
        <div className="flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-lg">
            {categoryEmoji[cat]}
          </span>
          <div>
            <h3 className="font-semibold leading-tight text-card-foreground">{place.name}</h3>
            <span
              className={`mt-0.5 inline-block rounded-full px-2 py-0.5 text-xs font-medium ${categoryColors[cat]}`}
            >
              {cat}
            </span>
          </div>
        </div>
        {place.rating > 0 && (
          <div className="flex items-center gap-1 text-sm font-medium text-amber-500">
            <Star className="h-3.5 w-3.5 fill-current" />
            {place.rating}
            <span className="text-xs text-muted-foreground">({place.userRatingsTotal})</span>
          </div>
        )}
      </div>

      {/* Address */}
      <p className="mb-3 text-sm leading-relaxed text-muted-foreground line-clamp-2">
        {place.vicinity}
      </p>

      {/* Open status */}
      {place.isOpen !== null && (
        <div className="mb-3">
          <span
            className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${
              place.isOpen ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-700"
            }`}
          >
            {place.isOpen ? "Open now" : "Closed"}
          </span>
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between border-t pt-3 text-sm">
        <span className="flex items-center gap-1 text-muted-foreground">
          {dist && (
            <>
              <Navigation className="h-3.5 w-3.5" />
              {dist}
            </>
          )}
        </span>
        <span className="flex items-center gap-1 font-semibold text-primary">
          {price === 0 ? "Free!" : `₹${price}/person`}
          <ExternalLink className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
        </span>
      </div>
    </a>
  );
};

export default SpotCard;
