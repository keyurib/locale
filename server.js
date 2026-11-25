// Tiny static file server for local development. No dependencies.
const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const PORT = Number(process.env.PORT) || 3000;

// Only these paths are served, so the rest of the project folder stays private
const PUBLIC = /^(index\.html$|(src|styles|fonts)[\\/])/;

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".jpg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
};

function notFound(res) {
  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("Not found");
}

http
  .createServer((req, res) => {
    const urlPath = req.url.split("?")[0];
    const relative = path.normalize(urlPath === "/" ? "index.html" : urlPath.slice(1));

    if (!PUBLIC.test(relative)) return notFound(res);

    fs.readFile(path.join(__dirname, relative), (error, content) => {
      if (error) return notFound(res);
      res.writeHead(200, {
        "Content-Type": TYPES[path.extname(relative)] || "application/octet-stream",
        "Cache-Control": "no-store",
      });
      res.end(content);
    });
  })
  .listen(PORT, "127.0.0.1", () => {
    console.log(`Airbnb Locale running at http://localhost:${PORT}`);
  });
