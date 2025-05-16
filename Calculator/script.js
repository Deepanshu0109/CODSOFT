function press(value) {
  let display = document.getElementById("display");
  display.value += value;         
}
function equal() {
  try {
    let expression = document.getElementById("display").value;
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
          