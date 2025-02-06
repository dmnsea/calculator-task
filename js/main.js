import { loadTheme } from "./theme.js";
import { setButtonHandlers } from "./buttons.js";
import { addKeyBindings } from "./bindings.js";
import { enableModalDialogs } from "./modals.js";

addEventListener("load", () => {
  loadTheme();
  setButtonHandlers();
  addKeyBindings();
  enableModalDialogs();
});