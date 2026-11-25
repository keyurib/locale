// Grey rounded rectangle used instead of photography.
export function imagePlaceholder(className = "") {
  return `
    <div class="media placeholder ${className}" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <circle cx="8.5" cy="10" r="1.5" />
        <path d="m4 18 5-5 4 4 3-3 4 4" />
      </svg>
    </div>`;
}
