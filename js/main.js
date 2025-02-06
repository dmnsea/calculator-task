import { loadTheme } from "./theme.js";
import { setButtonHandlers } from "./buttons.js";
import { addKeyBindings } from "./bindings.js";
import { enableModalDialogs } from "./modals.js";
import { Storage } from "./storage.js";

addEventListener("load", () => {
  loadTheme();
  setButtonHandlers();
  addKeyBindings();
  enableModalDialogs();

  document.querySelector(".input").innerHTML = Storage.restoreCurrent();
});