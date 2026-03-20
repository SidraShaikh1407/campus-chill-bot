export type SpotCategory = "cafe" | "park" | "restaurant" | "mall";

export interface HangoutSpot {
  id: string;
  name: string;
  category: SpotCategory;
  priceRange: number;
  rating: number;
  distance: string;
  image: string;
  tags: string[];
  description: string;
}

export const CATEGORIES: { value: SpotCategory | "all"; label: string; emoji: string }[] = [
  { value: "all", label: "All Spots", emoji: "✨" },
  { value: "cafe", label: "Cafés", emoji: "☕" },
  { value: "park", label: "Parks", emoji: "🌳" },
  { value: "restaurant", label: "Restaurants", emoji: "🍽️" },
  { value: "mall", label: "Malls", emoji: "🛍️" },
];

// Mock data kept as fallback
export const hangoutSpots: HangoutSpot[] = [];
