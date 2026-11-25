// Screen 1: Create a Locale
import { backLink } from "../components/backLink.js";
import { chipGroup } from "../components/chipGroup.js";
import { questions, tripContext } from "../data.js";
import { state } from "../state.js";

const LOADING_MS = 1200;

export function createLocale(container) {
  let timer;

  container.innerHTML = `
    <div class="page screen">
      ${backLink("Back", "#/")}
      <div class="hero">
        <p class="hero__eyebrow">Airbnb Locale</p>
        <h1 tabindex="-1">Your neighborhood, planned.</h1>
        <p>Tell us what you’re in the mood for. We’ll create a thoughtful plan for your next few hours.</p>
      </div>

      <section class="panel trip" aria-label="Your trip">
        <dl class="facts">
          ${tripContext.map((row) => `<div><dt>${row.label}</dt><dd>${row.value}</dd></div>`).join("")}
        </dl>
      </section>

      <form class="create-form">
        ${questions.map((q) => chipGroup(q, state.preferences[q.name])).join("")}
        <div class="action-bar">
          <p class="status" role="status"></p>
          <div class="action-bar__buttons">
            <button class="btn btn--primary" type="submit">Create my Locale</button>
          </div>
        </div>
      </form>
    </div>`;

  const form = container.querySelector("form");
  const button = form.querySelector("button[type='submit']");
  const status = form.querySelector(".status");

  // Save the current answers and require at least one mood
  function update() {
    const answers = new FormData(form);
    for (const { name } of questions) {
      state.preferences[name] = answers.getAll(name);
    }
    const hasMood = state.preferences.mood.length > 0;
    button.disabled = !hasMood;
    status.textContent = hasMood ? "" : "Pick at least one mood to continue.";
  }

  form.addEventListener("change", update);
  update();

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    container.innerHTML = `
      <div class="page screen loading">
        <div class="loading__spinner" aria-hidden="true"></div>
        <h1 tabindex="-1">Planning your next few hours…</h1>
        <p class="muted">Looking around Manek Chowk</p>
      </div>`;
    window.scrollTo(0, 0);
    container.querySelector("h1").focus();
    timer = setTimeout(() => {
      state.planBackHref = "#/create";
      location.hash = "#/plan";
    }, LOADING_MS);
  });

  // Cleanup: stop the pending redirect if the guest leaves during loading
  return () => clearTimeout(timer);
}
