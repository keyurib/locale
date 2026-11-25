// Copies only what the website needs into dist/, ready to deploy.
const fs = require("node:fs");
const path = require("node:path");

const OUT = path.join(__dirname, "dist");
const FILES = [
  "index.html",
  "styles",
  "src",
  "fonts/AirbnbCerealVF-Regular.woff2",
  "fonts/Roboto-Regular.ttf",
  "fonts/Roboto-Bold.ttf",
];

fs.rmSync(OUT, { recursive: true, force: true });

for (const file of FILES) {
  const from = path.join(__dirname, file);
  // Fonts and logo are not in the public repository
  if (!fs.existsSync(from)) {
    console.warn(`Skipped missing ${file}`);
    continue;
  }
  fs.cpSync(from, path.join(OUT, file), { recursive: true });
}

// Ask search engines not to list this concept demo
fs.writeFileSync(path.join(OUT, "_headers"), "/*\n  X-Robots-Tag: noindex, nofollow\n");

console.log("Built dist/");
