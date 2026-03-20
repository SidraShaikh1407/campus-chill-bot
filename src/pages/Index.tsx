import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BudgetFilter from "@/components/BudgetFilter";
import SpotGrid from "@/components/SpotGrid";
import LocationPrompt from "@/components/LocationPrompt";
import { useLocation } from "@/hooks/useLocation";
import { useNearbyPlaces, getCategory, priceLevelToRupees } from "@/hooks/useNearbyPlaces";
import type { SpotCategory } from "@/data/hangoutSpots";

const Index = () => {
  const [budget, setBudget] = useState(300);
  const [category, setCategory] = useState<SpotCategory | "all">("all");
  const { location, loading: locLoading, error: locError, requestLocation } = useLocation();

  const { data: places = [], isLoading: placesLoading } = useNearbyPlaces({
    lat: location?.lat ?? null,
    lng: location?.lng ?? null,
  });

  const filtered = useMemo(() => {
    return places.filter((place) => {
      const price = priceLevelToRupees(place.priceLevel);
      const withinBudget = price <= budget;
      const cat = getCategory(place.types);
      const matchesCategory = category === "all" || cat === category;
      return withinBudget && matchesCategory;
    });
  }, [places, budget, category]);

  return (
    <div className="min-h-screen pb-16">
      <Navbar />
      <HeroSection />

      {!location ? (
        <LocationPrompt
          onRequest={requestLocation}
          loading={locLoading}
          error={locError}
        />
      ) : (
        <>
          <BudgetFilter
            budget={budget}
            onBudgetChange={setBudget}
            category={category}
            onCategoryChange={setCategory}
          />
          <SpotGrid
            places={filtered}
            loading={placesLoading}
            userLat={location.lat}
            userLng={location.lng}
          />
        </>
      )}
    </div>
  );
};

export default Index;
