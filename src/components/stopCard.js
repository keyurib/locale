import { placeImage } from "./placeImage.js";

// One entry in the timeline on screen 2, laid out like a listing:
// a photo with its category badge, then the details and the Swap action.
export function stopCard(stop, index) {
  return `
    <li class="timeline__item" style="--index: ${index}">
      <span class="timeline__time">${stop.time}</span>
      <article class="stop">
        <div class="stop__photo">
          ${placeImage(stop.photo, "")}
          <span class="photo-badge">${stop.category}</span>
        </div>
        <div class="stop__info">
          <h2><a class="stop__link" href="#/stop/${stop.id}">${stop.name}</a></h2>
          <p class="stop__why"><span class="visually-hidden">Why it fits: </span>${stop.reason}</p>
          <p class="muted">
            <span class="visually-hidden">Duration: </span>${stop.duration} ·
            <span class="visually-hidden">Distance: </span>${stop.distance}
          </p>
          <p class="stop__cost"><span class="visually-hidden">Estimated cost: </span>${stop.cost}</p>
          <button class="btn btn--secondary btn--small stop__swap" type="button"
            aria-expanded="false" aria-label="Swap ${stop.name}">Swap</button>
          <p class="stop__swap-note" role="status"></p>
        </div>
      </article>
    </li>`;
}
