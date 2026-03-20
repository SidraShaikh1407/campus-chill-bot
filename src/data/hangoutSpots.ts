export type SpotCategory = "cafe" | "park" | "restaurant" | "mall";

export interface HangoutSpot {
  id: string;
  name: string;
  category: SpotCategory;
  priceRange: number; // average cost per person in ₹
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

export const hangoutSpots: HangoutSpot[] = [
  {
    id: "1",
    name: "Brew & Chill",
    category: "cafe",
    priceRange: 150,
    rating: 4.3,
    distance: "0.8 km",
    image: "",
    tags: ["Wi-Fi", "Quiet"],
    description: "Cozy corner café with great cold brews and fast Wi-Fi.",
  },
  {
    id: "2",
    name: "Green Canopy Park",
    category: "park",
    priceRange: 0,
    rating: 4.7,
    distance: "1.2 km",
    image: "",
    tags: ["Free", "Outdoor"],
    description: "Shady trails and benches — perfect for a study break.",
  },
  {
    id: "3",
    name: "Spice Street Kitchen",
    category: "restaurant",
    priceRange: 250,
    rating: 4.1,
    distance: "2.1 km",
    image: "",
    tags: ["Veg Options", "Spicy"],
    description: "Affordable thalis and street-style chaats near campus.",
  },
  {
    id: "4",
    name: "City Square Mall",
    category: "mall",
    priceRange: 300,
    rating: 4.0,
    distance: "3.5 km",
    image: "",
    tags: ["Shopping", "Food Court"],
    description: "Movies, arcade games, and a massive food court.",
  },
  {
    id: "5",
    name: "The Reading Mug",
    category: "cafe",
    priceRange: 120,
    rating: 4.5,
    distance: "0.5 km",
    image: "",
    tags: ["Books", "Quiet"],
    description: "Part bookstore, part café — chai and pages all day.",
  },
  {
    id: "6",
    name: "Riverside Walk",
    category: "park",
    priceRange: 0,
    rating: 4.6,
    distance: "1.8 km",
    image: "",
    tags: ["Scenic", "Free"],
    description: "Evening strolls with a sunset view over the river.",
  },
  {
    id: "7",
    name: "Noodle Junction",
    category: "restaurant",
    priceRange: 180,
    rating: 4.2,
    distance: "1.4 km",
    image: "",
    tags: ["Quick Bites", "Late Night"],
    description: "Ramen bowls and momos open till midnight.",
  },
  {
    id: "8",
    name: "Metro Plaza",
    category: "mall",
    priceRange: 200,
    rating: 3.9,
    distance: "2.8 km",
    image: "",
    tags: ["Bowling", "Café"],
    description: "Bowling alley, quirky stores, and a rooftop café.",
  },
  {
    id: "9",
    name: "Chai Point Express",
    category: "cafe",
    priceRange: 80,
    rating: 4.4,
    distance: "0.3 km",
    image: "",
    tags: ["Cheap", "Quick"],
    description: "Cutting chai and bun maska for under ₹100.",
  },
  {
    id: "10",
    name: "Campus Garden",
    category: "park",
    priceRange: 0,
    rating: 4.8,
    distance: "0.1 km",
    image: "",
    tags: ["On Campus", "Free"],
    description: "Right on campus — hammocks, shade, and good vibes.",
  },
  {
    id: "11",
    name: "Tandoori Trails",
    category: "restaurant",
    priceRange: 350,
    rating: 4.6,
    distance: "3.2 km",
    image: "",
    tags: ["Non-Veg", "Group Friendly"],
    description: "Sizzlers and tandoori platters great for group dinners.",
  },
  {
    id: "12",
    name: "Pixel Arcade Café",
    category: "cafe",
    priceRange: 200,
    rating: 4.1,
    distance: "1.6 km",
    image: "",
    tags: ["Gaming", "Snacks"],
    description: "Retro arcade machines, board games, and milkshakes.",
  },
];
