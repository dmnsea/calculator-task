import { pressed0, pressed1, pressed2, pressed3, pressed4, pressed5, pressed6, pressed7,pressed8, pressed9, pressedAdd, pressedBracketClose, pressedBracketOpen, pressedCalc, pressedClear, pressedDel, pressedDivide, pressedDot, pressedMultiply, pressedSubtract } from "./buttons.js";

const keys = [
  "1", "2", "3", "4", "5", "6", "7", "8", "9", "0",
  "+", "-", "*", "/", "=", ".", "(", ")",
  "Delete", "Backspace", "Enter"
]

export function addKeyBindings(){
  window.addEventListener("keydown", (event) => {
    // console.log(event);
    if(keys.includes(event.key)){
      // console.log(`${event.key} pressed!`);
      switch(event.key){
        case "0":
          pressed0();
          break;
        case "1":
          pressed1();
          break;
        case "2":
          pressed2();
          break;
        case "3":
          pressed3();
          break;
        case "4":
          pressed4();
          break;
        case "5":
          pressed5();
          break;
        case "6":
          pressed6();
          break;
        case "7":
          pressed7();
          break;
        case "8":
          pressed8();
          break;
        case "9":
          pressed9();
          break;
        case "+":
          pressedAdd();
          break;
        case "-":
          pressedSubtract();
          break;
        case "*":
          pressedMultiply();
          break;
        case "/":
          pressedDivide();
          break;
        case "=":
        case "Enter":
          pressedCalc();
          break;
        case ".":
          pressedDot();
          break;
        case "(":
          pressedBracketOpen();
          break;
        case ")":
          pressedBracketClose();
          break;
        case "Delete":
          pressedClear();
          break;
        case "Backspace":
          pressedDel();
          break;
      }
    }
  });
  console.log("Key bindings are set");
}