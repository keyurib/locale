// Hash router:  #/  ->  home,  #/create  ->  screen 1,  #/plan  ->  screen 2,
// #/stop/<id>  ->  screen 3
import { findStop } from "./data.js";
import { createLocale } from "./screens/createLocale.js";
import { localeHome } from "./screens/localeHome.js";
import { stopDetails } from "./screens/stopDetails.js";
import { yourLocale } from "./screens/yourLocale.js";

const app = document.getElementById("app");
const APP_NAME = "Airbnb Locale";
let cleanup;

function render() {
  cleanup?.();
  cleanup = undefined;

  const [, screen = "", id] = location.hash.split("/");

  if (screen === "plan") {
    yourLocale(app);
    document.title = `Your Locale · ${APP_NAME}`;
  } else if (screen === "stop" && findStop(id)) {
    const stop = findStop(id);
    stopDetails(app, stop);
    document.title = `${stop.name} · ${APP_NAME}`;
  } else if (screen === "create") {
    cleanup = createLocale(app);
    document.title = `Create a Locale · ${APP_NAME}`;
  } else {
    cleanup = localeHome(app);
    document.title = `${APP_NAME} — Your neighborhood, planned.`;
  }

  window.scrollTo(0, 0);
}

window.addEventListener("hashchange", () => {
  render();
  app.querySelector("h1")?.focus({ preventScroll: true });
});

render();
