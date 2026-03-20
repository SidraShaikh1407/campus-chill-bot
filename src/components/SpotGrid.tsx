import type { NearbyPlace } from "@/hooks/useNearbyPlaces";
import SpotCard from "./SpotCard";
import { Search, Loader2 } from "lucide-react";

interface SpotGridProps {
  places: NearbyPlace[];
  loading?: boolean;
  userLat?: number;
  userLng?: number;
}

const SpotGrid = ({ places, loading, userLat, userLng }: SpotGridProps) => {
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-muted-foreground">
        <Loader2 className="mb-3 h-8 w-8 animate-spin text-primary" />
        <p className="text-sm font-medium">Finding places near you…</p>
      </div>
    );
  }

  if (places.length === 0) {
    return (
      <div className="animate-fade-up mx-auto max-w-md py-16 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
          <Search className="h-7 w-7 text-muted-foreground" />
        </div>
        <h3 className="mb-2 text-lg font-semibold">No spots match your filters</h3>
        <p className="text-sm text-muted-foreground">
          Try increasing your budget or choosing a different category.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto mt-10 max-w-5xl px-4">
      <p className="mb-6 text-sm font-medium text-muted-foreground">
        {places.length} spot{places.length !== 1 ? "s" : ""} found nearby
      </p>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {places.map((place, i) => (
          <SpotCard key={place.id} place={place} index={i} userLat={userLat} userLng={userLng} />
        ))}
      </div>
    </div>
  );
};

export default SpotGrid;
