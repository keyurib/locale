// Hardcoded sample data. Opening hours, prices, distances and walking times are
// illustrative only and have not been checked against the real places.

// Screen 0. Photo file names refer to src/places/.
export const home = {
  title: "Around Manek Chowk",
  stayLine: "Staying at Heritage Home, Ahmedabad",
  featured: {
    photo: "heritage-walk-of-ahmedabad.jpg",
    alt: "Carved wooden houses in Ahmedabad’s old city",
    title: "Rainy evening in Manek Chowk",
    detail: "4 stops · from 4:00 PM · about ₹1,300",
  },
};

// One carousel per group. "farOut" marks places outside the central city.
export const exploreGroups = [
  {
    title: "Heritage",
    places: [
      { name: "Sidi Saiyad Masjid", photo: "sidi-saiyad-masjid.jpg" },
      { name: "Bhadra Fort", photo: "bhadra-fort.jpg" },
      { name: "Bai Harir’s Stepwell", photo: "bai-harir.jpg" },
      { name: "Sabarmati Ashram", photo: "sabarmati-ashram.jpg" },
      { name: "Dutch Tombs Ahmedabad", photo: "dutch-tombs.jpg" },
      { name: "The Adalaj Stepwell", photo: "adalaj-stepwell.jpg", farOut: true },
    ],
  },
  {
    title: "Riverfront & outdoors",
    places: [
      { name: "Sabarmati Riverfront", photo: "sabarmati-riverfront.jpg" },
      { name: "Atal Bridge", photo: "atal-bridge.jpg" },
      { name: "Nagina Wadi", photo: "nagina-vadi.jpg" },
      { name: "Parimal Garden", photo: "parimal-garden.jpg" },
      { name: "Glow Garden", photo: "glow-garden.jpg" },
    ],
  },
  {
    title: "Museums & family",
    places: [
      { name: "The Calico Museum of Textiles", photo: "calico-museum.jpg" },
      { name: "Amdavad Ni Gufa", photo: "amdavad-ni-gufa.jpg" },
      {
        name: "Sardar Vallabhbhai Patel National Memorial",
        photo: "sardar-vallabhbhai-patel-national-memorial.jpg",
      },
      { name: "Kamla Nehru Zoological Garden", photo: "kamla-nehru-zoo.jpg" },
      { name: "Science City Ahmedabad", photo: "science-city.jpg", farOut: true },
    ],
  },
];

export const tripContext = [
  { label: "Stay", value: "Heritage Home, Ahmedabad" },
  { label: "Check-out", value: "Tomorrow, 11:00 AM" },
  { label: "Current location", value: "Manek Chowk, Ahmedabad" },
];

export const questions = [
  {
    name: "mood",
    legend: "What are you in the mood for?",
    multiple: true,
    options: ["Food", "Heritage", "Art", "Nature", "Nightlife", "Shopping", "Hidden gems"],
  },
  {
    name: "time",
    legend: "How much time do you have?",
    options: ["2 hours", "4 hours", "Evening"],
  },
  {
    name: "budget",
    legend: "Budget per person",
    options: ["Under ₹500", "₹1,500", "₹3,000+"],
  },
  {
    name: "weather",
    legend: "Weather",
    options: ["Sunny", "Rainy", "Hot", "Cool"],
  },
];

// The prototype always shows this one plan, whatever is selected on screen 1.
export const plan = {
  title: "Your next 3 hours near Manek Chowk",
  subtitle: "A rainy-evening plan for food, heritage, and local character.",
  summary: ["3 hours", "₹1,500 per person", "Rainy", "Food + Heritage"],
};

export const stops = [
  {
    id: "house-of-mg-cafe",
    time: "4:00 PM",
    name: "House of MG Café",
    photo: "house-of-mg.jpg",
    category: "Café",
    reason: "A cozy indoor stop for a rainy day.",
    duration: "45 min",
    cost: "₹350",
    distance: "1.2 km",
    neighborhood: "Manek Chowk",
    whyThisFits:
      "A relaxed indoor stop that fits your rainy weather, ₹1,500 budget, and interest in food and local character.",
    hours: "Open until 10:00 PM",
    reservation: "Recommended",
    walkingTime: "12 minutes",
    alternatives: [
      { name: "The Project Café", photo: "The-Project-Cafe.jpg", category: "Café", cost: "₹400", distance: "2.4 km" },
      { name: "Zen Cafe", photo: "zen-cafe.jpg", category: "Café", cost: "₹300", distance: "3.1 km" },
    ],
  },
  {
    id: "old-city-heritage-walk",
    time: "4:50 PM",
    name: "Old City Heritage Walk",
    photo: "heritage-walk-of-ahmedabad.jpg",
    category: "Heritage walk",
    reason: "A short cultural route with sheltered stops.",
    duration: "60 min",
    cost: "Free",
    distance: "2.1 km",
    neighborhood: "Old City",
    whyThisFits:
      "A short route through the old city with places to wait out a shower, matching your interest in heritage without adding to your budget.",
    hours: "Open until 6:30 PM",
    reservation: "Not needed",
    walkingTime: "18 minutes",
    alternatives: [
      { name: "Pol Houses Trail", photo: "pol-houses-trail.jpg", category: "Heritage walk", cost: "₹200", distance: "1.6 km" },
      { name: "Bhadra Fort Loop", photo: "bhadra-fort.jpg", category: "Heritage walk", cost: "Free", distance: "1.4 km" },
    ],
  },
  {
    id: "law-garden-night-market",
    time: "6:00 PM",
    name: "Law Garden Night Market",
    photo: "law-garden-night-market.jpg",
    category: "Market",
    reason: "Local food, shopping, and evening energy.",
    duration: "45 min",
    cost: "₹500",
    distance: "3.4 km",
    neighborhood: "Ellisbridge",
    whyThisFits:
      "An evening market for local snacks and handmade finds that stays within your budget and adds local character.",
    hours: "Open until 11:00 PM",
    reservation: "Not needed",
    walkingTime: "40 minutes",
    alternatives: [
      { name: "Dhalgarwad Market", photo: "dhalgarwad-market.webp", category: "Market", cost: "₹400", distance: "0.9 km" },
      { name: "Rani no Hajiro Bazaar", photo: "rani-no-hajiro-market.webp", category: "Market", cost: "₹300", distance: "0.5 km" },
    ],
  },
  {
    id: "manek-chowk-dinner",
    time: "7:00 PM",
    name: "Manek Chowk Dinner",
    photo: "manek-chowk-dinner.jpg",
    category: "Dinner",
    reason: "An iconic street-food finish to the evening.",
    duration: "60 min",
    cost: "₹450",
    distance: "2.8 km",
    neighborhood: "Manek Chowk",
    whyThisFits:
      "A well-known street-food square that suits your interest in food and keeps the whole evening within ₹1,500.",
    hours: "Open until late",
    reservation: "Not needed",
    walkingTime: "8 minutes",
    alternatives: [
      { name: "Agashiye", photo: "agashiye.jpg", category: "Dinner", cost: "₹1,200", distance: "1.2 km" },
      { name: "Gopi Dining Hall", photo: "gopi-dining-hall.jpg", category: "Dinner", cost: "₹400", distance: "2.2 km" },
    ],
  },
];

export function findStop(id) {
  return stops.find((stop) => stop.id === id);
}
