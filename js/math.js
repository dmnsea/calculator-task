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
    // console.log(`Parts of expression: ${expr}`);

    for(let part of expr){
      // TODO remove logs
      // console.log();
      // console.log(`Checking part: ${part}`);
      let pp = RPN.getPriority(part);
      // console.log(`It's priority: ${pp}`);
      switch(pp){
        // 0 = numbers
        case 0:
          // console.log("It's number");
          postfix.push(part);
          break;
        // 1 = brackets 
        case 1:
          if(part == "("){
            // console.log("It's opening bracket");
            opstack.push(part);
          }else{
            // console.log("It's closing bracket, purging opstack until the opening one");
            while(opstack.slice(-1) != "("){
              // console.log(opstack);
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
          // console.log("It's operation");
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
      // console.log(`finished processing part ${part}`);
      // console.log(`postfix: ${postfix}`);
      // console.log(`opstack: ${opstack}`);
      // console.log("==================================");
    }

    // console.log("Purging opstack");
    while(opstack.length > 0){
      postfix.push(opstack.pop());
    }
    // console.log("==================================");

//     console.log(`
// Final result:
// postfix: ${postfix.join(" ")}
// opstack: [${opstack.join(", ")}]
//       `.trim())
    return postfix;
  }
}

export function calc(expr){
  let solver = new RPN(expr);
  let postfix = solver.makePostfix();
  console.log(`${expr} => ${postfix.join(" ")}`);
  return "UNKNOWN";
}