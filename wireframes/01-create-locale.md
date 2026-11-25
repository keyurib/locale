# Screen 1 — Create a Locale

## Purpose
Let the guest quickly describe their mood, available time, budget, and weather so Airbnb Locale can generate one personalized neighbourhood plan.

## Layout
- Airbnb-style top navigation.
- Centered content area with generous whitespace.
- One primary call to action at the bottom.
- Mobile-first, but fully responsive.

## Content

### Header
- Feature name: **Airbnb Locale**
- Headline: **Your neighborhood, planned.**
- Supporting line: **Tell us what you’re in the mood for. We’ll create a thoughtful plan for your next few hours.**

### Trip context card
Show this as a compact, rounded card:
- Stay: Heritage Home, Ahmedabad
- Check-out: Tomorrow, 11:00 AM
- Current location: Manek Chowk, Ahmedabad

### Inputs
Use pill-style selectable chips.

**What are you in the mood for?**
- Food
- Heritage
- Art
- Nature
- Nightlife
- Shopping
- Hidden gems

Allow multiple selections.

**How much time do you have?**
- 2 hours
- 4 hours
- Evening

Allow only one selection.

**Budget per person**
- Under ₹500
- ₹1,500
- ₹3,000+

Allow only one selection.

**Weather**
- Sunny
- Rainy
- Hot
- Cool

Allow only one selection.

### Primary action
- Button label: **Create my Locale**
- On click: show a brief loading state, then navigate to Screen 2.

## Interaction notes
- Selected chips should have a clear selected state.
- The CTA should remain visible or easily reachable on mobile.
- Use a subtle transition when moving to Screen 2.
- Do not require an account, location permission, or real API call.