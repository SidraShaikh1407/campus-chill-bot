import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BudgetFilter from "@/components/BudgetFilter";
import SpotGrid from "@/components/SpotGrid";
import { hangoutSpots, type SpotCategory } from "@/data/hangoutSpots";

const Index = () => {
  const [budget, setBudget] = useState(300);
  const [category, setCategory] = useState<SpotCategory | "all">("all");

  const filtered = useMemo(() => {
    return hangoutSpots.filter((spot) => {
      const withinBudget = spot.priceRange <= budget;
      const matchesCategory = category === "all" || spot.category === category;
      return withinBudget && matchesCategory;
    });
  }, [budget, category]);

  return (
    <div className="min-h-screen pb-16">
      <Navbar />
      <HeroSection />
      <BudgetFilter
        budget={budget}
        onBudgetChange={setBudget}
        category={category}
        onCategoryChange={setCategory}
      />
      <SpotGrid spots={filtered} />
    </div>
  );
};

export default Index;
