// Screen 2: Your Locale
import { backLink } from "../components/backLink.js";
import { stopCard } from "../components/stopCard.js";
import { plan, stops } from "../data.js";
import { state } from "../state.js";

export function yourLocale(container) {
  container.innerHTML = `
    <div class="page screen">
      ${backLink("Back", state.planBackHref)}
      <h1 tabindex="-1">${plan.title}</h1>
      <p class="plan__subtitle">${plan.subtitle}</p>
      <ul class="summary" aria-label="Plan summary">
        ${plan.summary.map((item) => `<li class="badge">${item}</li>`).join("")}
      </ul>

      <ol class="timeline">
        ${stops.map(stopCard).join("")}
      </ol>

      <div class="action-bar">
        <p class="status" role="status"></p>
        <div class="action-bar__buttons">
          <button class="btn btn--primary" type="button" data-action="reserve">Reserve</button>
          <button class="btn btn--secondary" type="button" data-action="route">Start route</button>
        </div>
      </div>
    </div>`;

  // Swap is a placeholder: it shows a note and keeps the same stop
  container.querySelectorAll(".stop__swap").forEach((button) => {
    button.addEventListener("click", () => {
      const note = button.closest(".stop").querySelector(".stop__swap-note");
      const open = button.getAttribute("aria-expanded") !== "true";
      button.setAttribute("aria-expanded", String(open));
      note.textContent = open
        ? "Swapping isn’t available in this prototype, so this stop stays in your plan."
        : "";
    });
  });

  const messages = {
    reserve: "This is a prototype, so nothing has been reserved.",
    route: `Prototype route: start at ${stops[0].name}. Live maps aren’t included.`,
  };
  const status = container.querySelector(".action-bar .status");

  container.querySelectorAll("[data-action]").forEach((button) => {
    button.addEventListener("click", () => {
      status.textContent = messages[button.dataset.action];
    });
  });
}
