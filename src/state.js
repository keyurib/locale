// In-memory state. It resets when the page is reloaded.
export const state = {
  // Pre-selected to match the example in PRODUCT.md
  preferences: {
    mood: ["Food", "Heritage"],
    time: ["4 hours"],
    budget: ["₹1,500"],
    weather: ["Rainy"],
  },
  // Where "Back" on screen 2 leads: the home page or the form
  planBackHref: "#/",
  // Ids of stops the guest tapped "Add to Locale" on
  addedStops: new Set(),
};
