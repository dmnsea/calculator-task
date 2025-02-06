import { Storage } from "./storage.js";

function setDark(){
  document.querySelectorAll(`.light`).forEach(el => {
    el.classList.remove("light");
    el.classList.add("dark");
  });
  document.querySelector("#theme-switcher").innerHTML = "dark_mode";
}

function changeTheme(){
  let theme = Storage.restoreTheme();
  let invertedTheme = theme === "light" ? "dark" : "light";

  let themed = document.querySelectorAll(`.${theme}`);
  console.log(themed);
  themed.forEach(el => {
    el.classList.remove(theme);
    el.classList.add(invertedTheme);
  });

  document.querySelector("#theme-switcher").innerHTML = `${invertedTheme}_mode`;

  Storage.saveTheme(invertedTheme);
}

export function loadTheme(){
  let switcher = document.querySelector("#theme-switcher");
  if(!switcher){
    alert("Missing theme switcher button!");
    return;
  }
  
  switcher.addEventListener("click", changeTheme);

  let theme = Storage.restoreTheme();
  if(theme == "dark"){
    setDark();
  }
}