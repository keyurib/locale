// Screen 0: Locale home
import { placeImage } from "../components/placeImage.js";
import { placeRow, setUpRow } from "../components/placeRow.js";
import { exploreGroups, home, stops } from "../data.js";
import { state } from "../state.js";

export function localeHome(container) {
  state.planBackHref = "#/";
  const { featured } = home;

  container.innerHTML = `
    <div class="page page--wide screen">
      <h1 tabindex="-1">${home.title}</h1>
      <p class="muted home__intro">${home.stayLine}</p>

      <section class="card banner">
        ${placeImage(featured.photo, featured.alt, "banner__photo")}
        <div class="banner__body">
          <div>
            <h2>${featured.title}</h2>
            <p class="muted">${featured.detail}</p>
          </div>
          <ol class="banner__stops">
            ${stops
              .map(
                (stop) => `
                  <li>
                    ${placeImage(stop.photo, "")}
                    <div><span>${stop.time}</span><strong>${stop.name}</strong></div>
                  </li>`
              )
              .join("")}
          </ol>
          <div class="banner__actions">
            <a class="btn btn--primary" href="#/plan">See this plan</a>
            <a class="btn btn--secondary" href="#/create">Plan my own</a>
          </div>
        </div>
      </section>

      <h2>Explore the city</h2>
      ${exploreGroups.map(placeRow).join("")}
    </div>`;

  const cleanups = [...container.querySelectorAll(".row")].map(setUpRow);
  return () => cleanups.forEach((cleanup) => cleanup());
}
