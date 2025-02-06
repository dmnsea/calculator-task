import { pressed0, pressed1, pressed2, pressed3, pressed4, pressed5, pressed6, pressed7,pressed8, pressed9, pressedAdd, pressedBracketClose, pressedBracketOpen, pressedCalc, pressedClear, pressedDel, pressedDivide, pressedDot, pressedMultiply, pressedPow, pressedSubtract } from "./buttons.js";

const keys = [
  "1", "2", "3", "4", "5", "6", "7", "8", "9", "0",
  "+", "-", "*", "^", "/", "=", ".", "(", ")",
  "Delete", "Backspace", "Enter", 
];



export function addKeyBindings(){
  window.addEventListener("keydown", (event) => {
    // console.log(event);
    if(keys.includes(event.key)){
      // console.log(`${event.key} pressed!`);
      switch(event.key){
        case "0":
          pressed0();
          document.querySelector("#btn-0").classList.add("hover");
          break;
        case "1":
          pressed1();
          document.querySelector("#btn-1").classList.add("hover");
          break;
        case "2":
          pressed2();
          document.querySelector("#btn-2").classList.add("hover");
          break;
        case "3":
          pressed3();
          document.querySelector("#btn-3").classList.add("hover");
          break;
        case "4":
          pressed4();
          document.querySelector("#btn-4").classList.add("hover");
          break;
        case "5":
          pressed5();
          document.querySelector("#btn-5").classList.add("hover");
          break;
        case "6":
          pressed6();
          document.querySelector("#btn-6").classList.add("hover");
          break;
        case "7":
          pressed7();
          document.querySelector("#btn-7").classList.add("hover");
          break;
        case "8":
          pressed8();
          document.querySelector("#btn-8").classList.add("hover");
          break;
        case "9":
          pressed9();
          document.querySelector("#btn-9").classList.add("hover");
          break;
        case "+":
          pressedAdd();
          document.querySelector("#btn-add").classList.add("hover");
          break;
        case "-":
          pressedSubtract();
          document.querySelector("#btn-subtract").classList.add("hover");
          break;
        case "*":
          pressedMultiply();
          document.querySelector("#btn-multiply").classList.add("hover");
          break;
        case "^":
          pressedPow();
          document.querySelector("#btn-pow").classList.add("hover");
          break;
        case "/":
          pressedDivide();
          document.querySelector("#btn-divide").classList.add("hover");
          break;
        case "=":
        case "Enter":
          pressedCalc();
          document.querySelector("#btn-calculate").classList.add("hover");
          break;
        case ".":
          pressedDot();
          document.querySelector("#btn-period").classList.add("hover");
          break;
        case "(":
          pressedBracketOpen();
          document.querySelector("#btn-bracket-open").classList.add("hover");
          break;
        case ")":
          pressedBracketClose();
          document.querySelector("#btn-bracket-close").classList.add("hover");
          break;
        case "Delete":
          pressedClear();
          document.querySelector("#btn-delete").classList.add("hover");
          break;
        case "Backspace":
          pressedDel();
          document.querySelector("#btn-clear").classList.add("hover");
          break;
      }
    }
  });

  window.addEventListener("keyup", (event) => {
    if(keys.includes(event.key)){
      switch(event.key){
        case "0":
          document.querySelector("#btn-0").classList.remove("hover");
          break;
        case "1":
          document.querySelector("#btn-1").classList.remove("hover");
          break;
        case "2":
          document.querySelector("#btn-2").classList.remove("hover");
          break;
        case "3":
          document.querySelector("#btn-3").classList.remove("hover");
          break;
        case "4":
          document.querySelector("#btn-4").classList.remove("hover");
          break;
        case "5":
          document.querySelector("#btn-5").classList.remove("hover");
          break;
        case "6":
          document.querySelector("#btn-6").classList.remove("hover");
          break;
        case "7":
          document.querySelector("#btn-7").classList.remove("hover");
          break;
        case "8":
          document.querySelector("#btn-8").classList.remove("hover");
          break;
        case "9":
          document.querySelector("#btn-9").classList.remove("hover");
          break;
        case "+":
          document.querySelector("#btn-add").classList.remove("hover");
          break;
        case "-":
          document.querySelector("#btn-subtract").classList.remove("hover");
          break;
        case "*":
          document.querySelector("#btn-multiply").classList.remove("hover");
          break;
        case "^":
          document.querySelector("#btn-pow").classList.remove("hover");
          break;
        case "/":
          document.querySelector("#btn-divide").classList.remove("hover");
          break;
        case "=":
        case "Enter":
          document.querySelector("#btn-calculate").classList.remove("hover");
          break;
        case ".":
          document.querySelector("#btn-period").classList.remove("hover");
          break;
        case "(":
          document.querySelector("#btn-bracket-open").classList.remove("hover");
          break;
        case ")":
          document.querySelector("#btn-bracket-close").classList.remove("hover");
          break;
        case "Delete":
          document.querySelector("#btn-delete").classList.remove("hover");
          break;
        case "Backspace":
          document.querySelector("#btn-clear").classList.remove("hover");
          break;
      }
    }
  });
  console.log("Key bindings are set");
}