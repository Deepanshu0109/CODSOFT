function press(value) {
  let display = document.getElementById("display");
  display.value += value;         
}
function equal() {
  try {
    let expression = document.getElementById("display").value;
    expression = expression.replace(/(\d+)%/g, "($1/100)");
    expression = expression.replace(/(\d+)\s*\+\s*\((\d+)\/100\)/, "($1 + ($2/100)*$1)");
    expression = expression.replace(/(\d+)\s*\-\s*\((\d+)\/100\)/, "($1 - ($2/100)*$1)");
    expression = expression.replace(/X/, "*");
    let result = eval(expression);
    display.value = result;  

  } catch {
    document.getElementById("display").value = "error";
  }
}  
function allClear() {
  document.getElementById("display").value = "";
}
function backspace() {
  let display = document.getElementById("display");
  display.value = display.value.slice(0,-1);
}
          