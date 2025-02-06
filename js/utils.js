function getLastChar(str){
  str = str.trim();
  if(str.length > 0){
    return str.trim().slice(-1)[0];
  }else{
    return "";
  }
}

export function canPressDigit(expr){
  let allowed = ["(", ".", "+", "-", "*", "/", "^", ""];
  let last = getLastChar(expr);
  let prevIsDigit = !!last.match(/\d/);
  return prevIsDigit || allowed.includes(last);
}

export function canPressDot(expr){
  console.log(`Checking: "${expr}"`);
  let last = getLastChar(expr);
  let lastOperand = expr.split(" ").slice(-1)[0];
  console.log(`lastOperand="${lastOperand}"`);
  let goodOperand = lastOperand.split("").filter(c => c == ".").length == 0;
  return !!last.match(/\d/) && goodOperand;
}

export function canPressCalc(expr){
  // TODO:
  return false;
}

export function canDoOperation(expr){
  let last = getLastChar(expr);
  return !!last.match(/\d/) || !!last.match(/\)/);
}

export function canOpenBracket(expr){
  let good = ["+", "-", "/", "*", "(", "^", ""];
  let last = getLastChar(expr);
  return good.includes(last);
}

export function canCloseBracket(expr){
  let last = getLastChar(expr);
  let opened = expr.split("").filter(c => c == "(").length;
  let closed = expr.split("").filter(c => c == ")").length;
  return !!last.match(/\d/) && opened > closed;
}