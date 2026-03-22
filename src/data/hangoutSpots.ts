export type SpotCategory = "cafe" | "park" | "restaurant" | "mall" | "fastfood" | "other";

export type MumbaiArea = "andheri" | "bandra" | "goregaon" | "malad" | "kandivali" | "borivali";

export interface HangoutSpot {
  id: string;
  name: string;
  category: SpotCategory;
  priceRange: number;
  rating: number;
  area: MumbaiArea;
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
  { value: "fastfood", label: "McDonald's & More", emoji: "🍔" },
  { value: "other", label: "Other Hangouts", emoji: "🎯" },
];

export const AREAS: { value: MumbaiArea | "all"; label: string }[] = [
  { value: "all", label: "All Areas" },
  { value: "andheri", label: "Andheri" },
  { value: "bandra", label: "Bandra" },
  { value: "goregaon", label: "Goregaon" },
  { value: "malad", label: "Malad" },
  { value: "kandivali", label: "Kandivali" },
  { value: "borivali", label: "Borivali" },
];

export const hangoutSpots: HangoutSpot[] = [
  // Andheri
  { id: "1", name: "Leaping Windows", category: "cafe", priceRange: 250, rating: 4.4, area: "andheri", image: "", tags: ["Board Games", "Quirky"], description: "Board game café with amazing shakes and a chill vibe in Andheri West." },
  { id: "2", name: "McDonald's Andheri Station", category: "fastfood", priceRange: 150, rating: 4.0, area: "andheri", image: "", tags: ["Quick Bites", "Budget"], description: "Classic McDonald's right near the station — McAloo Tikki for ₹50." },
  { id: "3", name: "Fun Republic Mall", category: "mall", priceRange: 300, rating: 3.9, area: "andheri", image: "", tags: ["Movies", "Food Court"], description: "Movies, shopping, and a solid food court in Andheri West." },
  { id: "4", name: "Versova Beach", category: "park", priceRange: 0, rating: 4.2, area: "andheri", image: "", tags: ["Free", "Sunset"], description: "Walk along the shore and catch sunsets — zero cost hangout." },
  { id: "5", name: "Starter's & More", category: "restaurant", priceRange: 350, rating: 4.3, area: "andheri", image: "", tags: ["North Indian", "Group Friendly"], description: "Great starters and full meals for group dining in Andheri East." },
  { id: "6", name: "Smaaash", category: "other", priceRange: 400, rating: 4.1, area: "andheri", image: "", tags: ["Gaming", "VR"], description: "Virtual reality, go-karting, and arcade at Kamala Mills." },

  // Bandra
  { id: "7", name: "Carter Road Promenade", category: "park", priceRange: 0, rating: 4.6, area: "bandra", image: "", tags: ["Free", "Scenic"], description: "Iconic Bandra promenade — sea views, street food stalls, and vibes." },
  { id: "8", name: "Birdsong Café", category: "cafe", priceRange: 350, rating: 4.5, area: "bandra", image: "", tags: ["Organic", "Aesthetic"], description: "Aesthetic café with great coffee and organic bites in Hill Road." },
  { id: "9", name: "McDonald's Linking Road", category: "fastfood", priceRange: 150, rating: 4.0, area: "bandra", image: "", tags: ["Quick Bites", "Late Night"], description: "Grab a quick McFlurry after shopping at Linking Road." },
  { id: "10", name: "Bandstand Fort", category: "other", priceRange: 0, rating: 4.4, area: "bandra", image: "", tags: ["Free", "Historic"], description: "Historic fort with sea views — perfect for an evening hang." },
  { id: "11", name: "Pali Village Café", category: "restaurant", priceRange: 400, rating: 4.3, area: "bandra", image: "", tags: ["Continental", "Trendy"], description: "Trendy spot in Pali Hill for great food and chill evenings." },

  // Goregaon
  { id: "12", name: "Oberoi Mall", category: "mall", priceRange: 250, rating: 4.2, area: "goregaon", image: "", tags: ["Shopping", "Movies"], description: "One of the best malls in the suburbs — Inox and great stores." },
  { id: "13", name: "Aarey Colony", category: "park", priceRange: 0, rating: 4.7, area: "goregaon", image: "", tags: ["Nature", "Free"], description: "Green lung of Mumbai — cycling trails and fresh air." },
  { id: "14", name: "McDonald's Goregaon", category: "fastfood", priceRange: 150, rating: 3.9, area: "goregaon", image: "", tags: ["Budget", "Quick"], description: "Budget meals near Goregaon station for a quick bite." },
  { id: "15", name: "Café Starter", category: "cafe", priceRange: 200, rating: 4.1, area: "goregaon", image: "", tags: ["Wi-Fi", "Study"], description: "Quiet café perfect for studying with decent coffee." },

  // Malad
  { id: "16", name: "Inorbit Mall", category: "mall", priceRange: 300, rating: 4.3, area: "malad", image: "", tags: ["Shopping", "Food Court"], description: "Premium mall with a massive food court and entertainment zone." },
  { id: "17", name: "Madh Island Beach", category: "park", priceRange: 0, rating: 4.1, area: "malad", image: "", tags: ["Free", "Beach"], description: "Secluded beach vibes away from the Mumbai crowd." },
  { id: "18", name: "The Café Patisserie", category: "cafe", priceRange: 180, rating: 4.2, area: "malad", image: "", tags: ["Pastries", "Coffee"], description: "Freshly baked goodies and good coffee in Malad West." },
  { id: "19", name: "Sigree", category: "restaurant", priceRange: 450, rating: 4.4, area: "malad", image: "", tags: ["BBQ", "Group Friendly"], description: "Live grill restaurant — great for group celebrations." },

  // Kandivali
  { id: "20", name: "Growel's 101 Mall", category: "mall", priceRange: 200, rating: 4.0, area: "kandivali", image: "", tags: ["Movies", "Shopping"], description: "Neighbourhood mall with cinema and good food options." },
  { id: "21", name: "McDonald's Kandivali", category: "fastfood", priceRange: 150, rating: 3.9, area: "kandivali", image: "", tags: ["Budget", "Quick"], description: "Budget bites right on SV Road — great for broke students." },
  { id: "22", name: "Tikuji-ni-Wadi", category: "other", priceRange: 350, rating: 4.0, area: "kandivali", image: "", tags: ["Water Park", "Day Out"], description: "Water park and amusement rides for a full day out." },
  { id: "23", name: "Chai Gali", category: "cafe", priceRange: 80, rating: 4.3, area: "kandivali", image: "", tags: ["Cheap", "Chai"], description: "Street-style chai and snacks for under ₹100." },

  // Borivali
  { id: "24", name: "Sanjay Gandhi National Park", category: "park", priceRange: 50, rating: 4.8, area: "borivali", image: "", tags: ["Trekking", "Nature"], description: "Trekking, Kanheri Caves, and wildlife — the ultimate day trip." },
  { id: "25", name: "McDonald's Borivali", category: "fastfood", priceRange: 150, rating: 4.0, area: "borivali", image: "", tags: ["Budget", "Quick"], description: "Quick bites near Borivali station — always reliable." },
  { id: "26", name: "Gorai Beach", category: "park", priceRange: 0, rating: 4.0, area: "borivali", image: "", tags: ["Free", "Beach"], description: "Take the ferry to Gorai for a beach day with friends." },
  { id: "27", name: "Café Coffee Day Borivali", category: "cafe", priceRange: 180, rating: 3.8, area: "borivali", image: "", tags: ["Coffee", "AC"], description: "Classic CCD — AC, decent coffee, and a place to chill." },
  { id: "28", name: "Highway Gomantak", category: "restaurant", priceRange: 400, rating: 4.5, area: "borivali", image: "", tags: ["Seafood", "Famous"], description: "Legendary seafood — must-visit if you love fish fry." },
];
