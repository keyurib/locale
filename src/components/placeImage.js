import { imagePlaceholder } from "./imagePlaceholder.js";

// A place photo, or the grey placeholder when there is no photo yet.
// Pass an empty alt when the name is already written next to the picture.
export function placeImage(photo, alt, className = "") {
  if (!photo) return imagePlaceholder(className);
  return `<img class="media ${className}" src="src/places/${photo}" alt="${alt}" />`;
}
