class RPN {
  origin = "";

  static __priority = {
    "^": 4,
    
    "*": 3,
    "/": 3,

    "+": 2,
    "-": 2,

    "(": 1,
    ")": 1,
  }

  constructor(expr){
    this.origin = expr;
  }

  static getPriority(part){
    let num = Number.parseFloat(part);

    if(isNaN(num)){
      return RPN.__priority[part] ?? -1;
    }
    return 0;
  }

  makePostfix(){
    let opstack = [];
    let postfix = [];
    let expr = this.origin.split(" ");

    for(let part of expr){
      let pp = RPN.getPriority(part);
      switch(pp){
        // 0 = numbers
        case 0:
          postfix.push(Number.parseFloat(part));
          break;
        // 1 = brackets 
        case 1:
          if(part == "("){
            opstack.push(part);
          }else{
            while(opstack.slice(-1) != "("){
              postfix.push(opstack.pop());
            }
            opstack.pop();
          }
          break;
        // 2 = + and -
        // 3 = * and /
        // 4 = ^
        case 2:
        case 3:
        case 4:
          while(opstack.length > 0 && RPN.getPriority(opstack.slice(-1)) >= RPN.getPriority(part)){
            if(opstack.slice(-1) != "("){
              postfix.push(opstack.pop());
            }else{
              break;
            }
          }
          opstack.push(part);
          break;
        default:
          break;
      }
    }

    while(opstack.length > 0){
      postfix.push(opstack.pop());
    }

    return postfix;
  }

  calculate(){
    let postfix = this.makePostfix();
    let final = [];

    for(let el of postfix){
      if(typeof(el) === "number"){
        final.push(el);
      }else{
        let second = final.pop();
        let first = final.pop();
        let result;
        switch(el){
          case "+":
            result = first + second;
            break;
          case "-":
            result = first - second;
            break;
          case "*":
            result = first * second;
            break;
          case "/":
            result = first / second;
            break;
          case "^":
            result = first ** second;
            break;
          default:
            break;
        }
        final.push(result);
      }
    }

    if(final.length == 1){
      return final[0];
    }else{
      throw new Error(`Calculation stack has more than 1 element: [${final.join(", ")}]`);
    }
  }
}

export function calc(expr){
  let solver = new RPN(expr);
  let postfix = solver.makePostfix();
  console.log(`${expr} => ${postfix.join(" ")}`);
  try{
    return solver.calculate();
  }catch(e){
    return e;
  }
}