function themeSwitcher(event){
  let theme = localStorage.getItem("theme") ?? "light";
  let invertedTheme = theme === "light" ? "dark" : "light";
  let colored = document.querySelectorAll(`.${theme}`);
  colored.forEach(el => {
    el.classList.remove(theme);
    el.classList.add(invertedTheme);
  });
  localStorage.setItem("theme", invertedTheme);
}

export function setButtonHandlers(){
  document.querySelector("#theme-switcher").addEventListener("click", themeSwitcher);
}