// Screen 3: Stop details
import { backLink } from "../components/backLink.js";
import { placeImage } from "../components/placeImage.js";
import { state } from "../state.js";

export function stopDetails(container, stop) {
  const details = [
    ["Opening hours", stop.hours],
    ["Reservation", stop.reservation],
    ["Walking time from stay", stop.walkingTime],
    ["Estimated spend", stop.cost],
    ["Neighborhood", stop.neighborhood],
  ];

  container.innerHTML = `
    <div class="page screen">
      ${backLink("Back to Locale", "#/plan")}
      ${placeImage(stop.photo, stop.name, "details__hero")}

      <h1 tabindex="-1">${stop.name}</h1>
      <div class="details__meta">
        <span class="badge">${stop.category}</span>
        <span class="badge">${stop.neighborhood}</span>
      </div>

      <section class="details__section">
        <h2>Why this fits</h2>
        <p>${stop.whyThisFits}</p>
      </section>

      <section class="details__section">
        <h2>Practical details</h2>
        <dl class="panel facts facts--columns">
          ${details.map(([label, value]) => `<div><dt>${label}</dt><dd>${value}</dd></div>`).join("")}
        </dl>
      </section>

      <section class="details__section">
        <h2>Alternatives</h2>
        <ul class="alternatives">
          ${stop.alternatives
            .map(
              (alt) => `
                <li class="panel alternative">
                  ${placeImage(alt.photo, "")}
                  <div>
                    <h3>${alt.name}</h3>
                    <p class="muted">${alt.category}</p>
                    <p>${alt.cost} · ${alt.distance}</p>
                  </div>
                </li>`
            )
            .join("")}
        </ul>
      </section>

      <div class="action-bar">
        <p class="status status--success" role="status"></p>
        <div class="action-bar__buttons">
          <button class="btn btn--primary" type="button">Add to Locale</button>
          <a class="btn btn--secondary" href="#/plan">Back to plan</a>
        </div>
      </div>
    </div>`;

  const addButton = container.querySelector(".action-bar button");
  const status = container.querySelector(".action-bar .status");

  function showAdded() {
    addButton.textContent = "Added ✓";
    addButton.disabled = true;
    status.textContent = "Added to your Locale.";
  }

  if (state.addedStops.has(stop.id)) showAdded();

  addButton.addEventListener("click", () => {
    state.addedStops.add(stop.id);
    showAdded();
  });
}
