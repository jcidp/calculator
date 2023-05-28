let num1;
let operator = "";
let display_value = "";
let display = document.querySelector(".display");
let dot = document.querySelector("#dot");

document.querySelectorAll(".number").forEach(number => 
    number.addEventListener("click", fillDisplay));
document.querySelector("#clear").addEventListener("click", clear);
document.querySelectorAll(".operator").forEach(operator =>
    operator.addEventListener("click", applyOperator));
document.querySelector("#backspace").addEventListener("click", backspace);

document.addEventListener("keyup", keypressHandler);

function keypressHandler(e) {
    if (e.key === "Backspace") backspace();
    if ("0123456789.".includes(e.key)) fillDisplay(e.key);
    if ("+-*/=".includes(e.key)) applyOperator(e.key);
    if (e.key === "Enter") applyOperator("=");
    if (e.key === "Escape" || e.key === "Delete") clear();
}

function fillDisplay(e) {
    if (display_value.length >= 10) return;
    let input = e.target ? e.target.textContent : e;
    if (input === "." && display_value.includes(".")) return;
    if (display.textContent === "0" && (input !== "." || !display_value.includes("."))) {
        display_value = input === "." ? "0." : input;
        display.textContent = display_value;
        if (display_value.includes(".")) dot.disabled = true;
        return;
    }
    display_value += input !== "." ? input : 
        display_value === "" ? "0." : ".";
    display.textContent = display_value;
    if (display_value.includes(".")) dot.disabled = true;
    else dot.disabled = false;
}

function backspace() {
    display_value = display_value.length == 1 ? "0" : display_value.slice(0, -1);
    display.textContent = display_value;
    if (!display_value.includes(".")) dot.disabled = false;
}

function applyOperator(e) {
    if (operator) {
        let result = operate(num1, operator, Number(display_value));
        if (!isFinite(result)) {
            display_value = "";
            display.textContent = "Nice try";
            operator = "";
            if (!display_value.includes(".")) dot.disabled = false;
            return;
        }
        display_value = result.toString();
        if (display_value.length > 10) display_value = display_value.slice(0, 10);
        display.textContent = display_value;
    }
    let input = e.target ? e.target.textContent : e;
    num1 = Number(display_value);
    operator = input === "=" ? "" : input;
    if (operator !== "") display_value = "";
    if (display_value.includes(".")) dot.disabled = true;
    else dot.disabled = false;
}

function clear() {
    display_value = "";
    display.textContent = "0";
    operator = "";
    if (!display_value.includes(".")) dot.disabled = false;
}

function operate(num1, operator, num2) {
    operator_functions = {
        "+": add,
        "-": subtract,
        "*": multiply,
        "/": divide,
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