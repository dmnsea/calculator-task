export class Storage{
  static saveTheme(theme){
    localStorage.setItem("theme", theme);
  }

  static restoreTheme(){
    return localStorage.getItem("theme") ?? "light";
  }

  static saveCurrent(expr){
    localStorage.setItem("current_expression", expr);
  }
  
  static restoreCurrent(){
    return localStorage.getItem("current_expression") ?? "0";
  }

  static retrieveHistory(){
    return JSON.parse(localStorage.getItem("expr_history") ?? "[]").reverse();
  }

  static addToHistory(expr, res){
    let history = JSON.parse(localStorage.getItem("expr_history") ?? "[]");
    history.push({
      expression: expr,
      result: res
    });
    localStorage.setItem("expr_history", JSON.stringify(history.slice(-10)));
  }

  static clearHistory(){
    localStorage.setItem("expr_history", "[]");
  }
}