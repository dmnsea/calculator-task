const keys = [
  "1", "2", "3", "4", "5", "6", "7", "8", "9", "0",
  "+", "-", "*", "/", "=", ".",
  "Delete", "Backspace"
]

export function addKeyBindings(){
  window.addEventListener("keydown", (event) => {
    if(keys.includes(event.key)){
      console.log(`${event.key} pressed!`);
    }
  });
}

