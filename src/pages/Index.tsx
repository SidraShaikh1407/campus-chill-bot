import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BudgetFilter from "@/components/BudgetFilter";
import SpotGrid from "@/components/SpotGrid";
import AIChatButton from "@/components/AIChatButton";
import { hangoutSpots, type SpotCategory, type MumbaiArea } from "@/data/hangoutSpots";

const Index = () => {
  const [minBudget, setMinBudget] = useState(0);
  const [maxBudget, setMaxBudget] = useState(500);
  const [category, setCategory] = useState<SpotCategory | "all">("all");
  const [area, setArea] = useState<MumbaiArea | "all">("all");

  const filtered = useMemo(() => {
    return hangoutSpots.filter((spot) => {
      const withinBudget = spot.priceRange >= minBudget && spot.priceRange <= maxBudget;
      const matchesCategory = category === "all" || spot.category === category;
      const matchesArea = area === "all" || spot.area === area;
      return withinBudget && matchesCategory && matchesArea;
    });
  }, [minBudget, maxBudget, category, area]);

  return (
    <div className="min-h-screen pb-16">
      <Navbar />
      <HeroSection />
      <BudgetFilter
        minBudget={minBudget}
        maxBudget={maxBudget}
        onBudgetChange={(min, max) => { setMinBudget(min); setMaxBudget(max); }}
        category={category}
        onCategoryChange={setCategory}
        area={area}
        onAreaChange={setArea}
      />
      <SpotGrid spots={filtered} />
      <AIChatButton />
    </div>
  );
};

export default Index;
