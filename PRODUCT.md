# Airbnb Locale — Product Brief

Build a small, experimental in-app feature called **Airbnb Locale — Your neighborhood, planned.**

This is a personal learning project to demonstrate a capability. It is not an Airbnb product and has no effect on Airbnb.

Airbnb Locale is a new feature inside Airbnb that creates one personalized neighbourhood plan for a guest’s next few hours based on:
- Interests
- Available time
- Budget per person
- Weather
- Current location and stay context

## Required scope

Build exactly 4 screens:

0. Locale home (starting point)
1. Create a Locale
2. Your Locale
3. Stop details

Screens 1–3 are frozen: keep their layout and wording. Only make the changes needed to add place photos and connect them to the starting point.

Read and follow the wireframe specifications in:

- `wireframes/00-start.md`
- `wireframes/01-create-locale.md`
- `wireframes/02-your-locale.md`
- `wireframes/03-stop-details.md`

## Starting point

The guest should be able to look around before being asked any questions. It should:

- Show the Locale logo and the city name
- List places to explore around the guest
- Offer two ways forward: open a ready-made curated plan, or plan their own (screen 1)
- Read like a local guide, not an AI tool

## Places

Keep the places already in the plan:

- House of MG Café
- Old City Heritage Walk
- Law Garden Night Market
- Manek Chowk Dinner

Add these places to explore:

- Heritage: Sidi Saiyad Masjid, Bhadra Fort, Bai Harir’s Stepwell, Sabarmati Ashram, Dutch Tombs Ahmedabad, The Adalaj Stepwell
- Riverfront and outdoors: Sabarmati Riverfront, Atal Bridge, Nagina Wadi, Parimal Garden, Glow Garden
- Museums and family: The Calico Museum of Textiles, Amdavad Ni Gufa, Sardar Vallabhbhai Patel National Memorial, Kamla Nehru Zoological Garden, Science City Ahmedabad

Photos are in `src/places/`. Places without a photo use an image placeholder.

## Product concept

Instead of browsing dozens of experiences, the guest receives one curated, feasible plan for the time they actually have.

Example input:
- Staying in Ahmedabad
- Has 3 hours
- Budget: ₹1,500 per person
- Interested in food and heritage
- Weather: rainy

Example output:
- Café
- Sheltered heritage walk
- Local market or boutique
- Dinner stop

Each stop should include practical details, timing, estimated cost, distance, and a clear reason it was selected.

## Build constraints

- Use hardcoded realistic sample data for Ahmedabad, Gujarat, India.
- No backend, authentication, real maps, payments, live weather, or external APIs.
- Do not recreate Airbnb’s homepage, search flow, listing pages, or existing product.
- Do not copy Airbnb’s content, photography, illustrations, or existing product flows.
- The only branding asset used is the Airbnb logo, shown as “airbnb • Locale”, with a visible note that this is a concept demo and not an Airbnb product.
- Use the extracted Airbnb design system for all visual styling.
- Make the UI responsive for mobile and desktop.
- Keep the code simple, componentized, and beginner-friendly.
- Use subtle, purposeful animations only.

## Visual overrides

Where the live Airbnb site differs from `SKILL.md` and `DESIGN.md`, follow the live site:

- Headings and body text both use Airbnb Cereal, with headings at medium to semibold weight.
- No bordered cards. Group information on soft grey panels; raised cards use a soft shadow only.
- The main call to action uses the pink gradient. Secondary buttons are flat grey. Buttons have 12px corners.
- Carousel controls are small round buttons with line icons.
- Tags are transparent with a solid outline, except badges on photos, which are white like Airbnb’s. Actions are never placed on top of photos.

