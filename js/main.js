import { loadTheme } from "./theme.js";
import { setButtonHandlers } from "./buttons.js";
import { addKeyBindings } from "./bindings.js";

addEventListener("load", () => {
  loadTheme();
  setButtonHandlers();
  addKeyBindings();
});