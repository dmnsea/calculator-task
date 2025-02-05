const keys = [
  "1", "2", "3", "4", "5", "6", "7", "8", "9", "0",
  "+", "-", "*", "/", "=", ".", "(", ")",
  "Delete", "Backspace", "Enter"
]

export function addKeyBindings(){
  window.addEventListener("keydown", (event) => {
    // console.log(event);
    if(keys.includes(event.key)){
      console.log(`${event.key} pressed!`);
    }
  });
}