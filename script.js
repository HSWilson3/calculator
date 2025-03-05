// Create "working" variables
let numA;
let numB;
let operator;
let input = "";

// Create variables from buttons
const butt1 = document.querySelector("#one");
const butt2 = document.querySelector("#two");
const butt3 = document.querySelector("#three");
const butt4 = document.querySelector("#four");
const butt5 = document.querySelector("#five");
const butt6 = document.querySelector("#six");
const butt7 = document.querySelector("#seven");
const butt8 = document.querySelector("#eight");
const butt9 = document.querySelector("#nine");
const butt0 = document.querySelector("#zero");
const numButtons = [
    butt1, butt2, butt3, butt4, butt5, 
    butt6, butt7, butt8, butt9, butt0
];

const buttAdd = document.querySelector("#add");
const buttSub = document.querySelector("#sub");
const buttMult = document.querySelector("#mult");
const buttDiv = document.querySelector("#divide");
const opButtons = [buttAdd, buttSub, buttMult, buttDiv];

const display = document.querySelector("#display");
const equals = document.querySelector("#equals");
const clear = document.querySelector("#clear");

// Add event listeners to buttons
numButtons.forEach((item) => {
    item.addEventListener("click", () => {
        input += item.textContent;
        display.innerHTML = input;
    });
});

opButtons.forEach((item) => {
    item.addEventListener("click", () => {
        operator = item.textContent;
        if (numA === undefined) {
            numA = Number(input);
        } else {
            numB = Number(input);
            const intermediate = operate(operator, numA, numB);
            numA = intermediate;
            display.innerHTML = intermediate;
        }
        input = "";
    });
})

equals.addEventListener("click", () => {
    numB = Number(input);
    input = "";
    const result = operate(operator, numA, numB);
    display.innerHTML = result;
});

clear.addEventListener("click", () => {
    numA = undefined;
    numB = undefined;
    input = "";
    operator = undefined;
});

// Operation functions
function add(a, b) {
    return (a + b);
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "NOPE";
    } else {
        return a / b;
    }
}

// Identify operation required
function operate(op, a, b) {
    let result;
    switch (op) {
        case "+":
            result = add(a, b);
            break;
        case "-":
            result = subtract(a, b);
            break;
        case "*":
            result = multiply(a, b);
            break;
        case "/":
            result = divide(a, b);
            break;
        default:
            return "invalid operator";
    }
    //if (result.toString().includes(".") && result.toString().length)
    return result;
}





