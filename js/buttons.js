import { canPressDigit, canPressDot, canPressCalc, canOpenBracket, canCloseBracket, canDoOperation } from "./utils.js";

export function pressedDel(){
  let input = document.querySelector(".input");
  if(input.innerText.length > 0){
    input.innerText = input.innerText.substring(0, input.innerText.length-1);
  }
  document.querySelector(".result").innerHTML = "?";
}

export function pressedClear(){
  document.querySelector(".input").innerHTML = "";
  document.querySelector(".result").innerHTML = "?";
}

export function pressedBracketOpen(){
  let expr = document.querySelector(".input").innerText;
  if(canOpenBracket(expr))
    document.querySelector(".input").innerHTML += "(";
}

export function pressedBracketClose(){
  let expr = document.querySelector(".input").innerText;
  if(canCloseBracket(expr))
    document.querySelector(".input").innerHTML += ")";
}

export function pressed7(){
  let expr = document.querySelector(".input").innerText;
  if(canPressDigit(expr))
    document.querySelector(".input").innerHTML += "7";
}

export function pressed8(){
  let expr = document.querySelector(".input").innerText;
  if(canPressDigit(expr))
    document.querySelector(".input").innerHTML += "8";
}

export function pressed9(){
  let expr = document.querySelector(".input").innerText;
  if(canPressDigit(expr))
    document.querySelector(".input").innerHTML += "9";
}

export function pressedDivide(){
  let expr = document.querySelector(".input").innerText;
  if(canDoOperation(expr))
    document.querySelector(".input").innerHTML += " / ";
}

export function pressed4(){
  let expr = document.querySelector(".input").innerText;
  if(canPressDigit(expr))
    document.querySelector(".input").innerHTML += "4";
}

export function pressed5(){
  let expr = document.querySelector(".input").innerText;
  if(canPressDigit(expr))
    document.querySelector(".input").innerHTML += "5";
}

export function pressed6(){
  let expr = document.querySelector(".input").innerText;
  if(canPressDigit(expr))
    document.querySelector(".input").innerHTML += "6";
}

export function pressedMultiply(){
  let expr = document.querySelector(".input").innerText;
  if(canDoOperation(expr))
    document.querySelector(".input").innerHTML += " * ";
}

export function pressed1(){
  let expr = document.querySelector(".input").innerText;
  if(canPressDigit(expr))
    document.querySelector(".input").innerHTML += "1";
}

export function pressed2(){
  let expr = document.querySelector(".input").innerText;
  if(canPressDigit(expr))
    document.querySelector(".input").innerHTML += "2";
}

export function pressed3(){
  let expr = document.querySelector(".input").innerText;
  if(canPressDigit(expr))
    document.querySelector(".input").innerHTML += "3";
}

export function pressedSubtract(){
  let expr = document.querySelector(".input").innerText;
  if(canDoOperation(expr))
    document.querySelector(".input").innerHTML += " - ";
}

export function pressed0(){
  let expr = document.querySelector(".input").innerText;
  if(canPressDigit(expr))
    document.querySelector(".input").innerHTML += "0";
}

export function pressedDot(){
  let expr = document.querySelector(".input").innerText;
  if(canPressDot(expr))
    document.querySelector(".input").innerHTML += ".";
}

export function pressedCalc(){
  let expr = document.querySelector(".input").innerText;
  if(canPressCalc(expr)){
    let result = "UNKNOWN";
    // TODO import calculate function
    document.querySelector(".result").innerText = result;
  }
}

export function pressedAdd(){
  let expr = document.querySelector(".input").innerText;
  if(canDoOperation(expr))
    document.querySelector(".input").innerHTML += " + ";
}

export function setButtonHandlers(){
  let btnDel = document.querySelector("#btn-delete");
  let btnClr = document.querySelector("#btn-clear");
  let btnBrOp = document.querySelector("#btn-bracket-open");
  let btnBrCls = document.querySelector("#btn-bracket-close");

  let btn7 = document.querySelector("#btn-7");
  let btn8 = document.querySelector("#btn-8");
  let btn9 = document.querySelector("#btn-9");
  let btnDiv = document.querySelector("#btn-divide");

  let btn4 = document.querySelector("#btn-4");
  let btn5 = document.querySelector("#btn-5");
  let btn6 = document.querySelector("#btn-6");
  let btnMult = document.querySelector("#btn-multiply");

  let btn1 = document.querySelector("#btn-1");
  let btn2 = document.querySelector("#btn-2");
  let btn3 = document.querySelector("#btn-3");
  let btnSub = document.querySelector("#btn-subtract");

  let btn0 = document.querySelector("#btn-0");
  let btnDot = document.querySelector("#btn-period");
  let btnCalc = document.querySelector("#btn-calculate");
  let btnAdd = document.querySelector("#btn-add");

  let missing = [
    btnDel, btnClr, btnBrOp, btnBrCls,
    btn7, btn8, btn9, btnDiv,
    btn4, btn5, btn6, btnMult,
    btn1, btn2, btn3, btnSub,
    btn0, btnDot, btnCalc, btnAdd
  ].filter(el => el == null).length;

  if(missing > 0){
    alert(`Missing ${missing} virtual keyboard buttons!`);
    return;
  }

  btnDel.addEventListener("click", pressedDel);
  btnClr.addEventListener("click", pressedClear);
  btnBrOp.addEventListener("click", pressedBracketOpen);
  btnBrCls.addEventListener("click", pressedBracketClose);

  btn7.addEventListener("click", pressed7);
  btn8.addEventListener("click", pressed8);
  btn9.addEventListener("click", pressed9);
  btnDiv.addEventListener("click", pressedDivide);

  btn4.addEventListener("click", pressed4);
  btn5.addEventListener("click", pressed5);
  btn6.addEventListener("click", pressed6);
  btnMult.addEventListener("click", pressedMultiply);

  btn1.addEventListener("click", pressed1);
  btn2.addEventListener("click", pressed2);
  btn3.addEventListener("click", pressed3);
  btnSub.addEventListener("click", pressedSubtract);

  btn0.addEventListener("click", pressed0);
  btnDot.addEventListener("click", pressedDot);
  btnCalc.addEventListener("click", pressedCalc);
  btnAdd.addEventListener("click", pressedAdd);
}