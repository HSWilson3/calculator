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
const buttDec = document.querySelector("#decimal");
const numButtons = [
    butt1, butt2, butt3, butt4, butt5, 
    butt6, butt7, butt8, butt9, butt0, buttDec
];

const buttAdd = document.querySelector("#add");
const buttSub = document.querySelector("#sub");
const buttMult = document.querySelector("#mult");
const buttDiv = document.querySelector("#divide");
const opButtons = [buttAdd, buttSub, buttMult, buttDiv];

const display = document.querySelector("#display");
const equals = document.querySelector("#equals");
const clear = document.querySelector("#clear");
const back = document.querySelector("#back");

// Add event listeners to buttons
numButtons.forEach((item) => {
    item.addEventListener("click", () => {
        numEvent(item.textContent);
    });
});

opButtons.forEach((item) => {
    item.addEventListener("click", () => {
        opEvent(item.textContent);
    });
})

equals.addEventListener("click", () => {
    equalsEvent();
});

clear.addEventListener("click", () => {
    numA = undefined;
    numB = undefined;
    input = "";
    operator = undefined;
    display.innerHTML = "";
});

back.addEventListener("click", () => {
    backEvent();
});

// Add event listeners for keyboard input
document.addEventListener("keydown", (event) => {
    const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
    const ops = ["+", "-", "*", "/"];
    if (numbers.includes(event.key)) {
        numEvent(event.key);
    } else if (ops.includes(event.key)) {
        opEvent(event.key);
    } else if (event.key === "=" || event.key === "Enter") {
        equalsEvent();
    } else if (event.key === "Backspace") {
        backEvent();
    }
});

// Event listener functions
function numEvent(num) {
    if (!(input.includes(".") && num === ".")) {
        input += num;
        display.innerHTML = input;  
    }
}

function opEvent(op) {
    operator = op;
    if (numA === undefined) {
        numA = Number(input);
    } else {
        if (!(input === "")) {
            numB = Number(input);
            const intermediate = operate(operator, numA, numB);
            numA = intermediate;
            display.innerHTML = intermediate;
        }
    }
    input = "";
}

function equalsEvent() {
    if (!(operator === undefined)) {
        numB = Number(input);
        input = "";
        const result = operate(operator, numA, numB);
        display.innerHTML = result;
        numA = result;
    }
}

function backEvent() {
    input = input.slice(0, -1);
    display.innerHTML = input;
}

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
    
    // Handle overflow of display window
    if (result.toString().includes(".") && result.toString().length > 13) {
        let arr = result.toString().split(".");
        let arr2 = arr.map((item) => item.length);
        let places = 13 - (arr2[0] + 1);
        result = result.toFixed(places);
    }

    return result;
}



