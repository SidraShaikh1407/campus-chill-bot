import { Star } from "lucide-react";
import type { HangoutSpot } from "@/data/hangoutSpots";
import { AREAS } from "@/data/hangoutSpots";

const categoryColors: Record<string, string> = {
  cafe: "bg-spot-cafe/15 text-spot-cafe",
  park: "bg-spot-park/15 text-spot-park",
  restaurant: "bg-spot-restaurant/15 text-spot-restaurant",
  mall: "bg-spot-mall/15 text-spot-mall",
  fastfood: "bg-spot-fastfood/15 text-spot-fastfood",
  other: "bg-spot-other/15 text-spot-other",
};

const categoryEmoji: Record<string, string> = {
  cafe: "☕",
  park: "🌳",
  restaurant: "🍽️",
  mall: "🛍️",
  fastfood: "🍔",
  other: "🎯",
};

const SpotCard = ({ spot, index }: { spot: HangoutSpot; index: number }) => {
  const areaLabel = AREAS.find(a => a.value === spot.area)?.label ?? spot.area;

  return (
    <div
      className="animate-fade-up group rounded-2xl border bg-card p-5 shadow-sm transition-shadow duration-300 hover:shadow-lg"
      style={{ animationDelay: `${(index % 6) * 80 + 100}ms` }}
    >
      <div className="mb-3 flex items-start justify-between">
        <div className="flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-lg">
            {categoryEmoji[spot.category]}
          </span>
          <div>
            <h3 className="font-semibold leading-tight text-card-foreground">{spot.name}</h3>
            <span className={`mt-0.5 inline-block rounded-full px-2 py-0.5 text-xs font-medium ${categoryColors[spot.category] ?? "bg-muted text-muted-foreground"}`}>
              {spot.category}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-1 text-sm font-medium text-amber-500">
          <Star className="h-3.5 w-3.5 fill-current" />
          {spot.rating}
        </div>
      </div>

      <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{spot.description}</p>

      <div className="mb-4 flex flex-wrap gap-1.5">
        {spot.tags.map((tag) => (
          <span key={tag} className="rounded-md bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between border-t pt-3 text-sm">
        <span className="font-medium text-muted-foreground">📍 {areaLabel}</span>
        <span className="font-semibold text-primary">
          {spot.priceRange === 0 ? "Free!" : `₹${spot.priceRange}/person`}
        </span>
      </div>
    </div>
  );
};

export default SpotCard;
