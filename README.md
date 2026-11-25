# Locale

**Day 3 of [100 Days](https://100days.keyurib.workers.dev). Mission: Steal the System.**

**Live: https://locale.keyurib.workers.dev**

A concept demo made for learning. It is **not an Airbnb product** and is not affiliated with or endorsed by Airbnb.

## The mission

Take a design system you love and use it to build a completely new product.

I extracted Airbnb's design language with [SkillUI](https://skillui.vercel.app) and used it to design **Locale**: one curated neighbourhood plan for a guest's next few hours, set around Manek Chowk, Ahmedabad.

## What's in it

1. **Locale home:** a ready-made evening plan and places to explore in carousels
2. **Create a Locale:** pick mood, time, budget and weather
3. **Your Locale:** a four-stop timeline
4. **Stop details:** why it fits, practical details and alternatives

## What I learned

Extracted tokens were only a starting point. Panels without borders, the gradient button, round carousel controls and photo badges came from comparing screens with the real site, one round at a time.

## Run

Requires [Node.js](https://nodejs.org).

```
npm start
```

Open http://localhost:3000.

The Airbnb font files, logo and extracted design kit are not in this repository, so a fresh clone uses fallback fonts and shows the word "airbnb" in place of the logo.

## Deploy

```
npm run deploy
```

Run this only from a copy that has `fonts/` and `src/assets/`, or the live site will lose them.

## Structure

```
index.html        Page shell and top navigation
server.js         Local static server
build.js          Copies the site into dist/ for deployment
styles/           tokens, base, components, screen layouts
src/main.js       Hash router
src/data.js       Hardcoded Ahmedabad sample data
src/places/       Place photos
src/state.js      Selections and added stops (resets on reload)
src/components/   Reusable pieces
src/screens/      One file per screen
wireframes/       Screen specifications
PRODUCT.md        Product brief
```

## Prototype limits

- No backend, accounts, maps, payments or live data.
- The plan is always the same, whatever you select.
- Explore places are browse-only.
- Swap, Reserve and Start route only show a message.
- Hours, prices, distances and walking times are illustrative and unverified.
- Photos belong to their respective owners and are used only for this learning demo.
