let num1;
let operator = "";
let display_value = "";
let display = document.querySelector(".display");
let error = document.querySelector(".error");

document.querySelectorAll(".number").forEach(number => 
    number.addEventListener("click", fillDisplay));
document.querySelector("#clear").addEventListener("click", clear);
document.querySelectorAll(".operator").forEach(operator =>
    operator.addEventListener("click", applyOperator));
document.querySelector("#backspace").addEventListener("click", backspace);
//document.querySelector("#dot").addEventListener("click", addDecimalPoint);

function fillDisplay(e) {
    error.style.visibility = "hidden";
    console.log(e.target.textContent); //delete this
    if (display.textContent == 0) {
        display_value = e.target.textContent;
        display.textContent = display_value;
        return;
    }
    display_value += e.target.textContent;
    display.textContent = display_value;
}

function backspace() {
    display_value = Math.floor(display_value / 10);
    display.textContent = display_value;
}

function applyOperator(e) {
    if (operator) {
        let result = operate(num1, operator, Number(display_value));
        if (!isFinite(result)) {
            error.style.visibility = "visible";
            clear();
            return;
        }
        display_value = (Math.round(result * 1000) / 1000).toString();
        display.textContent = display_value;
    }
    num1 = Number(display_value);
    operator = e.target.textContent === "=" ? "" : e.target.textContent;
    if (operator !== "") display_value = "";
}

function clear() {
    display_value = "";
    display.textContent = "0";
    operator = "";
}

function operate(num1, operator, num2) {
    operator_functions = {
        "+": add,
        "-": subtract,
        "x": multiply,
        "÷": divide,
        "=": equals
    }
    return operator_functions[operator](num1, num2);
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function equals(a, b) {
    return
}