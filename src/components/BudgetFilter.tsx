import { Slider } from "@/components/ui/slider";
import { CATEGORIES, AREAS, type SpotCategory, type MumbaiArea } from "@/data/hangoutSpots";

interface BudgetFilterProps {
  minBudget: number;
  maxBudget: number;
  onBudgetChange: (min: number, max: number) => void;
  category: SpotCategory | "all";
  onCategoryChange: (value: SpotCategory | "all") => void;
  area: MumbaiArea | "all";
  onAreaChange: (value: MumbaiArea | "all") => void;
}

const BudgetFilter = ({ minBudget, maxBudget, onBudgetChange, category, onCategoryChange, area, onAreaChange }: BudgetFilterProps) => {
  return (
    <div className="animate-fade-up stagger-3 mx-auto max-w-2xl px-4">
      <div className="rounded-2xl border bg-card p-6 shadow-sm space-y-6">
        {/* Budget range slider */}
        <div>
          <div className="mb-3 flex items-baseline justify-between">
            <label className="text-sm font-medium text-foreground">Budget Range</label>
            <span className="text-lg font-bold text-primary tabular-nums">
              {minBudget === 0 ? "Free" : `₹${minBudget}`} — ₹{maxBudget}
              <span className="text-sm font-normal text-muted-foreground">/person</span>
            </span>
          </div>
          <Slider
            value={[minBudget, maxBudget]}
            onValueChange={([min, max]) => onBudgetChange(min, max)}
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

        {/* Area pills */}
        <div>
          <label className="mb-2 block text-sm font-medium text-foreground">Area</label>
          <div className="flex flex-wrap gap-2">
            {AREAS.map((a) => (
              <button
                key={a.value}
                onClick={() => onAreaChange(a.value)}
                className={`rounded-full px-3 py-1.5 text-sm font-medium transition-all duration-200 active:scale-[0.97] ${
                  area === a.value
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {a.label}
              </button>
            ))}
          </div>
        </div>

        {/* Category pills */}
        <div>
          <label className="mb-2 block text-sm font-medium text-foreground">Category</label>
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
    </div>
  );
};

export default BudgetFilter;
