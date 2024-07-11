let input = document.getElementById("input");
input.value = "0";
let dot = document.querySelector(".dot");
let operation = "none";
let newNumber = false;
let firstNumber = 0;

//numbers input
function button1() {
    newNumberClean();
    removeZero();
    input.value += 1;
}
function button2() {
    newNumberClean();
    removeZero();
    input.value += 2;
}
function button3() {
    newNumberClean();
    removeZero();
    input.value += 3;
}
function button4() {
    newNumberClean();
    removeZero();
    input.value += 4;
}
function button5() {
    newNumberClean();
    removeZero();
    input.value += 5;
}
function button6() {
    newNumberClean();
    removeZero();
    input.value += 6;
}
function button7() {
    newNumberClean();
    removeZero();
    input.value += 7;
}
function button8() {
    newNumberClean();
    removeZero();
    input.value += 8;
}
function button9() {
    newNumberClean();
    removeZero();
    input.value += 9;
}
function button0() {
    newNumberClean();
    removeZero();
    input.value += 0;
}
function buttonDot() {
    input.value += '.';
    dot.setAttribute("disabled", true);
}

//function buttons
function clearInput() {
    input.value = "0";
    dot.removeAttribute("disabled");
    newNumber = false;
    firstNumber = 0;
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

function completeOperation() {
    if (operation === "add") {
        firstNumber += Number(input.value);
        input.value = firstNumber;
    }
    if (operation === "subtract") {
        firstNumber -= Number(input.value);
        input.value = firstNumber;
    }
    if (operation === "multiply") {
        firstNumber *= Number(input.value);
        input.value = firstNumber;
    }
    if (operation === "divide") {
        firstNumber /= Number(input.value);
        input.value = firstNumber;
    }
}
function buttonAdd() {
    if (operation !== "add") {
        operation = "add";
        newNumber = true;
        firstNumber = Number(input.value);
    }
    else {
        completeOperation();
        newNumber = true;
    }
}
function buttonSubtract() {
    if (operation !== "subtract") {
        operation = "subtract";
        newNumber = true;
        firstNumber = Number(input.value);
    }
    else {
        completeOperation();
        newNumber = true;
    }
}
function buttonMultiply() {
    if (operation !== "multiply") {
        operation = "multiply";
        newNumber = true;
        firstNumber = Number(input.value);
    }
    else {
        completeOperation();
        newNumber = true;
    }
}
function buttonDivide() {
    if (operation !== "divide") {
        operation = "divide";
        newNumber = true;
        firstNumber = Number(input.value);
    }
    else {
        completeOperation();
        newNumber = true;
    }
}
function result() {
    completeOperation();
    newNumber = true;
}
