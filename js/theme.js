function setDark(){
  document.querySelectorAll(`.light`).forEach(el => {
    el.classList.remove("light");
    el.classList.add("dark");
  });
  document.querySelector("#theme-switcher").innerHTML = "dark_mode";
}

function changeTheme(){
  let theme = localStorage.getItem("theme") ?? "light";
  let invertedTheme = theme === "light" ? "dark" : "light";

  let themed = document.querySelectorAll(`.${theme}`);
  console.log(themed);
  themed.forEach(el => {
    el.classList.remove(theme);
    el.classList.add(invertedTheme);
  });

  document.querySelector("#theme-switcher").innerHTML = `${invertedTheme}_mode`;

  localStorage.setItem("theme", invertedTheme);
}

export function loadTheme(){
  let switcher = document.querySelector("#theme-switcher");
  switcher.addEventListener("click", changeTheme);

  let theme = localStorage.getItem("theme") ?? "light";
  if(theme == "dark"){
    setDark();
  }
}