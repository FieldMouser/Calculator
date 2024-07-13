let input = document.getElementById("input");
input.value = "0";
let dot = document.querySelector(".dot");
let operation = "none";
let newNumber = false;
let newDigit = false;
let firstNumber = 0;
let secondNumber = 0;

//numbers input
function button1() {
    newNumberClean();
    removeZero();
    input.value += "1";
}
function button2() {
    newNumberClean();
    removeZero();
    input.value += "2";
}
function button3() {
    newNumberClean();
    removeZero();
    input.value += "3";
}
function button4() {
    newNumberClean();
    removeZero();
    input.value += "4";
}
function button5() {
    newNumberClean();
    removeZero();
    input.value += "5";
}
function button6() {
    newNumberClean();
    removeZero();
    input.value += "6";
}
function button7() {
    newNumberClean();
    removeZero();
    input.value += "7";
}
function button8() {
    newNumberClean();
    removeZero();
    input.value += "8";
}
function button9() {
    newNumberClean();
    removeZero();
    input.value += "9";
}
function button0() {
    newNumberClean();
    removeZero();
    input.value += "0";
}
function buttonDot() {
    input.value += '.';
    dot.setAttribute("disabled", true);
}

//keyboard input
document.addEventListener("keydown", function(event) {
    if (event.code === 'Digit1') {
        button1();
    }
    else if (event.shiftKey && event.code === "Digit8") {
        buttonMultiply();
    }
    else if (event.code === "Digit2") {
        button2();
    }
    else if (event.code === "Digit3") {
        button3();
    }
    else if (event.code === "Digit4") {
        button4();
    }
    else if (event.code === "Digit5") {
        button5();
    }
    else if (event.code === "Digit6") {
        button6();
    }
    else if (event.code === "Digit7") {
        button7();
    }
    else if (event.code === "Digit8") {
        button8();
    }
    else if (event.code === "Digit9") {
        button9();
    }
    else if (event.code === "Digit0") {
        button0();
    }
    else if (event.code == "Period") {
        buttonDot();
    }
    else if (event.code === "Slash") {
        buttonDivide();
    }
    else if (event.code === "Minus") {
        buttonSubtract();
    }
    else if (event.code == "Enter") {
        buttonResult();
    }
    else if (event.code == "Equal" && event.shiftKey) {
        buttonAdd();
    }
    else if (event.code === "Backspace") {
        clearInput();
    }
});

//function buttons
function clearInput() {
    input.value = "0";
    dot.removeAttribute("disabled");
    newNumber = false;
    firstNumber = 0;
    secondNumber = 0;
    operation = "none";
    newDigit = false;
}

function removeZero() {
    if (input.value === "0") {
        input.value = "";
    }
}
function invertInput() {
    input.value = 0-input.value;
}
function percentInput() {
    input.value /= 100;
}

//operation buttons

function newNumberClean() {
    if (newNumber === true) {
        input.value = "0";
        dot.removeAttribute("disabled");
        newNumber = false;
    }
}

function buttonAdd() {
    result();
    operation = "add";
}
function buttonSubtract() {
    result();
    operation = "substract";
}
function buttonMultiply() {
    result();
    operation = "multiply";
}
function buttonDivide() {
    result();
    operation = "divide";
}
function result() {
    console.log(newDigit);
    if (newDigit === false) {
        firstNumber = Number(input.value);
        newDigit = true;
        newNumber = true;
    }
    else {
        secondNumber = Number(input.value);
        input.value = operate(firstNumber, secondNumber, operation);
        firstNumber = Number(input.value);
        newNumber = true;
    }
    console.log(firstNumber);
    console.log(secondNumber);
}

function buttonResult() {
    result();
    secondNumber = 0;
    newNumber = false;
    operation = "none";
}

//operations
function add(firstNumber, secondNumber) {
    return (firstNumber + secondNumber);
}

function subtract(firstNumber, secondNumber) {
    return (firstNumber - secondNumber);
}

function multiply(firstNumber, secondNumber) {
    return (firstNumber * secondNumber);
}

function divide(firstNumber, secondNumber) {
    return (firstNumber / secondNumber);
}
    
function operate(firstNumber, secondNumber, operation) {
    if (operation === "add") {
        return (add(firstNumber, secondNumber));
    }
    else if (operation === "substract") {
        return (subtract(firstNumber, secondNumber)); 
    }
    else if (operation === "multiply") {
        return (multiply(firstNumber, secondNumber))
    }
    else if (operation === "divide") {
        return (divide(firstNumber, secondNumber));
    }
    else {
        return ("0");
    }
}

