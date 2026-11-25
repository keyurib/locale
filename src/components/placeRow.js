import { placeImage } from "./placeImage.js";

// Line icons for the round buttons
function icon(path) {
  return `
    <svg viewBox="0 0 12 12" width="12" height="12" aria-hidden="true" fill="none"
      stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
      <path d="${path}" />
    </svg>`;
}

const CHEVRON_LEFT = "M7.5 1.5 3 6l4.5 4.5";
const CHEVRON_RIGHT = "M4.5 1.5 9 6l-4.5 4.5";
const ARROW_RIGHT = "M1.5 6h9M6.5 2l4 4-4 4";

// A titled, horizontally scrolling row of places.
export function placeRow({ title, places }) {
  const cards = places
    .map(
      (place) => `
        <li class="place">
          <div class="place__photo">
            ${placeImage(place.photo, "")}
            ${place.farOut ? `<span class="photo-badge">Worth the trip</span>` : ""}
          </div>
          <h4>${place.name}</h4>
        </li>`
    )
    .join("");

  return `
    <section class="row">
      <div class="row__header">
        <div class="row__title">
          <h3>${title}</h3>
          <button class="arrow row__more" type="button" aria-expanded="false"
            aria-label="Show all in ${title}">${icon(ARROW_RIGHT)}</button>
        </div>
        <div class="row__arrows">
          <button class="arrow" type="button" data-step="-1" aria-label="Previous in ${title}">${icon(CHEVRON_LEFT)}</button>
          <button class="arrow" type="button" data-step="1" aria-label="Next in ${title}">${icon(CHEVRON_RIGHT)}</button>
        </div>
      </div>
      <ul class="row__track">${cards}</ul>
    </section>`;
}

// Makes the round buttons work. Returns a function that undoes the setup.
export function setUpRow(row) {
  const track = row.querySelector(".row__track");
  const arrows = row.querySelector(".row__arrows");
  const [previous, next] = arrows.children;
  const more = row.querySelector(".row__more");

  function update() {
    const expanded = row.classList.contains("row--all");
    const maxScroll = track.scrollWidth - track.clientWidth;
    arrows.hidden = expanded || maxScroll <= 1;
    // Nothing more to show when every card already fits
    more.hidden = !expanded && maxScroll <= 1;
    previous.disabled = track.scrollLeft <= 1;
    next.disabled = track.scrollLeft >= maxScroll - 1;
  }

  arrows.addEventListener("click", (event) => {
    const step = Number(event.target.closest("button")?.dataset.step);
    if (step) track.scrollBy({ left: step * track.clientWidth });
  });
  track.addEventListener("scroll", update);

  // The arrow beside the title switches between one row and a grid of all cards
  more.addEventListener("click", () => {
    const expanded = row.classList.toggle("row--all");
    more.setAttribute("aria-expanded", String(expanded));
    track.scrollLeft = 0;
    update();
  });

  const observer = new ResizeObserver(update);
  observer.observe(track);
  return () => observer.disconnect();
}
