import { Input } from "@/components/ui/input";
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
  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Math.max(0, Number(e.target.value) || 0);
    onBudgetChange(Math.min(val, maxBudget), maxBudget);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Math.max(0, Number(e.target.value) || 0);
    onBudgetChange(minBudget, Math.max(val, minBudget));
  };

  return (
    <div className="animate-fade-up stagger-3 mx-auto max-w-2xl px-4">
      <div className="rounded-2xl border bg-card p-6 shadow-sm space-y-6">
        {/* Budget range inputs */}
        <div>
          <label className="mb-3 block text-sm font-medium text-foreground">Budget Range (₹ per person)</label>
          <div className="flex items-center gap-3">
            <div className="flex-1">
              <label className="mb-1 block text-xs text-muted-foreground">Min ₹</label>
              <Input
                type="number"
                min={0}
                value={minBudget}
                onChange={handleMinChange}
                placeholder="0"
                className="tabular-nums"
              />
            </div>
            <span className="mt-5 text-muted-foreground font-medium">—</span>
            <div className="flex-1">
              <label className="mb-1 block text-xs text-muted-foreground">Max ₹</label>
              <Input
                type="number"
                min={0}
                value={maxBudget}
                onChange={handleMaxChange}
                placeholder="500"
                className="tabular-nums"
              />
            </div>
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
