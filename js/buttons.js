import { canPressDigit, canPressDot, canPressCalc, canOpenBracket, canCloseBracket, canDoOperation } from "./utils.js";
import { Storage } from "./storage.js";

export function pressedDel(){
  let expr = document.querySelector(".input");
  if(expr.innerHTML.length > 0){
    expr.innerHTML = expr.innerHTML.substring(0, expr.innerHTML.length-1);
  }
  Storage.saveCurrent(expr.innerHTML);
  document.querySelector(".result").innerHTML = "?";
}

export function pressedClear(){
  document.querySelector(".input").innerHTML = "";
  Storage.saveCurrent("");
  document.querySelector(".result").innerHTML = "?";
}

export function pressedBracketOpen(){
  let expr = document.querySelector(".input");
  if(canOpenBracket(expr.innerHTML)){
    expr.innerHTML += "(";
    Storage.saveCurrent(expr.innerHTML);
  }
}

export function pressedBracketClose(){
  let expr = document.querySelector(".input");
  if(canCloseBracket(expr.innerHTML)){
    expr.innerHTML += ")";
    Storage.saveCurrent(expr.innerHTML);
  }
}

export function pressedPow(){
  let expr = document.querySelector(".input");
  if(canDoOperation(expr.innerHTML)){
    expr.innerHTML += " ^ ";
    Storage.saveCurrent(expr.innerHTML);
  }
}

export function pressedMultiply(){
  let expr = document.querySelector(".input");
  if(canDoOperation(expr.innerHTML)){
    expr.innerHTML += " * ";
    Storage.saveCurrent(expr.innerHTML);
  }
}

export function pressed7(){
  let expr = document.querySelector(".input");
  if(canPressDigit(expr.innerHTML)){
    expr.innerHTML += "7";
    Storage.saveCurrent(expr.innerHTML);
  }
}

export function pressed8(){
  let expr = document.querySelector(".input");
  if(canPressDigit(expr.innerHTML)){
    expr.innerHTML += "8";
    Storage.saveCurrent(expr.innerHTML);
  }
}

export function pressed9(){
  let expr = document.querySelector(".input");
  if(canPressDigit(expr.innerHTML)){
    expr.innerHTML += "9";
    Storage.saveCurrent(expr.innerHTML);
  }
}

export function pressedDivide(){
  let expr = document.querySelector(".input");
  if(canDoOperation(expr.innerHTML)){
    expr.innerHTML += " / ";
    Storage.saveCurrent(expr.innerHTML);
  }
}

export function pressed4(){
  let expr = document.querySelector(".input");
  if(canPressDigit(expr.innerHTML)){
    expr.innerHTML += "4";
    Storage.saveCurrent(expr.innerHTML);
  }
}

export function pressed5(){
  let expr = document.querySelector(".input");
  if(canPressDigit(expr.innerHTML)){
    expr.innerHTML += "5";
    Storage.saveCurrent(expr.innerHTML);
  }
}

export function pressed6(){
  let expr = document.querySelector(".input");
  if(canPressDigit(expr.innerHTML)){
    expr.innerHTML += "6";
    Storage.saveCurrent(expr.innerHTML);
  }
}

export function pressedSubtract(){
  let expr = document.querySelector(".input");
  if(canDoOperation(expr.innerHTML)){
    expr.innerHTML += " - ";
    Storage.saveCurrent(expr.innerHTML);
  }
}

export function pressed1(){
  let expr = document.querySelector(".input");
  if(canPressDigit(expr.innerHTML)){
    expr.innerHTML += "1";
    Storage.saveCurrent(expr.innerHTML);
  }
}

export function pressed2(){
  let expr = document.querySelector(".input");
  if(canPressDigit(expr.innerHTML)){
    expr.innerHTML += "2";
    Storage.saveCurrent(expr.innerHTML);
  }
}

export function pressed3(){
  let expr = document.querySelector(".input");
  if(canPressDigit(expr.innerHTML)){
    expr.innerHTML += "3";
    Storage.saveCurrent(expr.innerHTML);
  }
}

export function pressedAdd(){
  let expr = document.querySelector(".input");
  if(canDoOperation(expr.innerHTML)){
    expr.innerHTML += " + ";
    Storage.saveCurrent(expr.innerHTML);
  }
}

export function pressed0(){
  let expr = document.querySelector(".input");
  if(canPressDigit(expr.innerHTML)){
    expr.innerHTML += "0";
    Storage.saveCurrent(expr.innerHTML);
  }
}

export function pressedDot(){
  let expr = document.querySelector(".input");
  if(canPressDot(expr.innerHTML)){
    expr.innerHTML += ".";
    Storage.saveCurrent(expr.innerHTML);
  }
}

export function pressedCalc(){
  let expr = document.querySelector(".input");
  if(canPressCalc(expr.innerHTML)){
    // TODO import calculate function
    let result = "UNKNOWN";
    // TODO save calculation result to history
    document.querySelector(".result").innerHTML = result;
  }
}

export function setButtonHandlers(){
  let btnDel = document.querySelector("#btn-delete");
  let btnClr = document.querySelector("#btn-clear");

  let btnBrOp = document.querySelector("#btn-bracket-open");
  let btnBrCls = document.querySelector("#btn-bracket-close");
  let btnPow = document.querySelector("#btn-pow");
  let btnMult = document.querySelector("#btn-multiply");

  let btn7 = document.querySelector("#btn-7");
  let btn8 = document.querySelector("#btn-8");
  let btn9 = document.querySelector("#btn-9");
  let btnDiv = document.querySelector("#btn-divide");

  let btn4 = document.querySelector("#btn-4");
  let btn5 = document.querySelector("#btn-5");
  let btn6 = document.querySelector("#btn-6");
  let btnSub = document.querySelector("#btn-subtract");

  let btn1 = document.querySelector("#btn-1");
  let btn2 = document.querySelector("#btn-2");
  let btn3 = document.querySelector("#btn-3");
  let btnAdd = document.querySelector("#btn-add");

  let btn0 = document.querySelector("#btn-0");
  let btnDot = document.querySelector("#btn-period");
  let btnCalc = document.querySelector("#btn-calculate");

  let missing = [
    btnDel, btnClr, 
    btnBrOp, btnBrCls, btnPow, btnMult,
    btn7, btn8, btn9, btnDiv,
    btn4, btn5, btn6, btnSub,
    btn1, btn2, btn3, btnAdd,
    btn0, btnDot, btnCalc
  ].filter(el => el == null).length;

  if(missing > 0){
    alert(`Missing ${missing} virtual keyboard buttons!`);
    return;
  }

  btnDel.addEventListener("click", pressedDel);
  btnClr.addEventListener("click", pressedClear);

  btnBrOp.addEventListener("click", pressedBracketOpen);
  btnBrCls.addEventListener("click", pressedBracketClose);
  btnPow.addEventListener("click", pressedPow);
  btnMult.addEventListener("click", pressedMultiply);

  btn7.addEventListener("click", pressed7);
  btn8.addEventListener("click", pressed8);
  btn9.addEventListener("click", pressed9);
  btnDiv.addEventListener("click", pressedDivide);

  btn4.addEventListener("click", pressed4);
  btn5.addEventListener("click", pressed5);
  btn6.addEventListener("click", pressed6);
  btnSub.addEventListener("click", pressedSubtract);

  btn1.addEventListener("click", pressed1);
  btn2.addEventListener("click", pressed2);
  btn3.addEventListener("click", pressed3);
  btnAdd.addEventListener("click", pressedAdd);

  btn0.addEventListener("click", pressed0);
  btnDot.addEventListener("click", pressedDot);
  btnCalc.addEventListener("click", pressedCalc);
}