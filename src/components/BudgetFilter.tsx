import { Slider } from "@/components/ui/slider";
import { CATEGORIES, type SpotCategory } from "@/data/hangoutSpots";

interface BudgetFilterProps {
  budget: number;
  onBudgetChange: (value: number) => void;
  category: SpotCategory | "all";
  onCategoryChange: (value: SpotCategory | "all") => void;
}

const BudgetFilter = ({ budget, onBudgetChange, category, onCategoryChange }: BudgetFilterProps) => {
  return (
    <div className="animate-fade-up stagger-3 mx-auto max-w-2xl px-4">
      <div className="rounded-2xl border bg-card p-6 shadow-sm">
        {/* Budget slider */}
        <div className="mb-6">
          <div className="mb-3 flex items-baseline justify-between">
            <label className="text-sm font-medium text-foreground">Your Budget</label>
            <span className="text-2xl font-bold text-primary tabular-nums">
              {budget === 0 ? "Free" : `₹${budget}`}
              <span className="text-sm font-normal text-muted-foreground">/person</span>
            </span>
          </div>
          <Slider
            value={[budget]}
            onValueChange={([v]) => onBudgetChange(v)}
            min={0}
            max={500}
            step={10}
            className="py-2"
          />
          <div className="mt-1 flex justify-between text-xs text-muted-foreground">
            <span>Free</span>
            <span>₹500</span>
          </div>
        </div>

        {/* Category pills */}
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              onClick={() => onCategoryChange(cat.value)}
              className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 active:scale-[0.97] ${
                category === cat.value
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              <span>{cat.emoji}</span>
              {cat.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BudgetFilter;
