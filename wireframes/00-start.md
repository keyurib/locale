# Screen 0 — Locale home

## Purpose
Let the guest look around before being asked any questions, then open a ready-made plan or plan their own. It should feel like an expansion of Airbnb and read like a local guide, not an AI tool.

## Layout
- Top navigation: Airbnb logo, then **• Locale**. City name on the right.
- Wider content area than screens 1–3.
- One full-width banner for the ready-made plan: photo on one side, plan on the other (stacked on mobile).
- Below it, one horizontal carousel per category with square photo cards and previous/next buttons, like the Airbnb homepage.

## Content

### Header
- Title: **Around Manek Chowk**
- Supporting line: **Staying at Heritage Home, Ahmedabad**

### Plan banner
- Large photo of the old city
- Title: **Rainy evening in Manek Chowk**
- Detail line: **4 stops · from 4:00 PM · about ₹1,300**
- The four stops, each with a small photo, time and name
- Primary button: **See this plan**
- Secondary button: **Plan my own**

### Explore the city
- Carousels: Heritage, Riverfront & outdoors, Museums & family
- Cards with photo and name for the places listed in `PRODUCT.md`
- Places outside the central city carry a white **Worth the trip** badge on the top-left of the photo: The Adalaj Stepwell, Science City Ahmedabad

## Navigation
- See this plan → Screen 2
- Plan my own → Screen 1 → Screen 2
- Logo → Screen 0
- Screen 1 has a **Back** link to Screen 0
- **Back** on Screen 2 returns to whichever screen the guest came from

## Interaction notes
- Carousel controls match the Airbnb homepage: round 28px previous/next buttons on the right, faint when disabled.
- A small → button beside each row title shows all of that row's cards in a grid; press it again to close.
- All carousel controls are hidden when all cards already fit.
- Explore cards are browse-only in this prototype, so they have no hover or tap effect.
- Show no hours, prices or distances for explore places.
- Do not add search, booking or listing features.
