// A question answered with pill chips. Checkboxes allow many answers,
// radio buttons allow one.
export function chipGroup({ name, legend, options, multiple }, selected) {
  const type = multiple ? "checkbox" : "radio";

  const chips = options
    .map(
      (option) => `
        <label class="chip">
          <input type="${type}" name="${name}" value="${option}" ${selected.includes(option) ? "checked" : ""} />
          <span>${option}</span>
        </label>`
    )
    .join("");

  return `
    <fieldset class="chip-group">
      <legend>${legend}</legend>
      <div class="chip-group__options">${chips}</div>
    </fieldset>`;
}
