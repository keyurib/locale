# Screen 2 — Your Locale

## Purpose
Show one curated, feasible neighbourhood plan based on the guest’s inputs. Avoid overwhelming the user with too many options.

## Layout
- Back button at the top left.
- Clear page title and short explanation.
- Summary chips below the title.
- Vertical timeline as the main content.
- Prominent action buttons at the bottom on mobile.

## Content

### Header
- Back label: **Back**
- Title: **Your next 3 hours near Manek Chowk**
- Subtitle: **A rainy-evening plan for food, heritage, and local character.**

### Summary chips
- 3 hours
- ₹1,500 per person
- Rainy
- Food + Heritage

### Timeline stops
Show four stops in chronological order.

#### Stop 1
- Time: 4:00 PM
- Image placeholder: rounded rectangle
- Name: House of MG Café
- Category: Café
- Why it fits: A cozy indoor stop for a rainy day.
- Duration: 45 min
- Estimated cost: ₹350
- Distance: 1.2 km
- Button: **Swap**

#### Stop 2
- Time: 4:50 PM
- Image placeholder: rounded rectangle
- Name: Old City Heritage Walk
- Category: Heritage walk
- Why it fits: A short cultural route with sheltered stops.
- Duration: 60 min
- Estimated cost: Free
- Distance: 2.1 km
- Button: **Swap**

#### Stop 3
- Time: 6:00 PM
- Image placeholder: rounded rectangle
- Name: Law Garden Night Market
- Category: Market
- Why it fits: Local food, shopping, and evening energy.
- Duration: 45 min
- Estimated cost: ₹500
- Distance: 3.4 km
- Button: **Swap**

#### Stop 4
- Time: 7:00 PM
- Image placeholder: rounded rectangle
- Name: Manek Chowk Dinner
- Category: Dinner
- Why it fits: An iconic street-food finish to the evening.
- Duration: 60 min
- Estimated cost: ₹450
- Distance: 2.8 km
- Button: **Swap**

### Primary actions
- Primary button: **Reserve**
- Secondary button: **Start route**

## Interaction notes
- Each timeline card should animate in with a subtle staggered entrance.
- Clicking a stop opens Screen 3.
- “Swap” can show a simple placeholder state for this prototype; it does not need to replace the stop.
- Do not show a long list of alternative plans on this screen.

## Visual style
- Each stop is a listing-style tile: a large rounded photo, then name, reason, duration, distance and cost.
- No box, border or divider around a stop.
- Category is a white badge over the top-left of the photo, like Airbnb's “Guest favourite”.
- Only the badge sits on the photo; **Swap** is a button below the details.
- Stacked on mobile; photo beside the text on wider screens.

