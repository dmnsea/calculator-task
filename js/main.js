import { addKeyBindings } from "./bindings.js";
import { loadTheme } from "./theme.js";
import { setButtonHandlers } from "./buttons.js";

addEventListener("load", () => {
  loadTheme();
  setButtonHandlers();
});