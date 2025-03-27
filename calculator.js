let n1 = "4";
let n2 = "3";
let operator = "+";
let displayValue = "";

const calculatorContainer = document.querySelector(".calculatorContainer");
const numbersContainer = document.querySelector(".numbersContainer");
const operatorsContainer = document.querySelector(".operatorsContainer");
const otherBtnContainer = document.querySelector(".otherBtnContainer");
let display = document.querySelector(".display");


function add(n1, n2) {
    return n1 + n2;
};


function subtract(n1, n2) {
    return n1 - n2;
};


function multiply(n1, n2) {
    return n1 * n2;
};


function divide(n1, n2) {
    return n1 / n2;
};


function exponential(n1, n2) {
    return n1 ** n2;
};

function operate(n1, operator, n2) {
    // Use switch instead of if/else
    switch (operator) {
        case "+":
            return (add(n1, n2));
        case "-":
            return (subtract(n1, n2));
        case "*":
            return (multiply(n1, n2));
        case "/":
            return (divide(n1, n2));
        case "**":
            return exponential(n1, n2);
        default:
            return ("error");
    };
};

//console.log(operate(n1, n2, operator));

// Resetta tutte le variabili svuotandole dei valori precedentemente inseriti
function clearDisplay(type, CssSelector, callbackF) {
    otherBtnContainer.addEventListener(type, e => {
        if (e.target.matches(CssSelector)) {
            callbackF();
        };
    });
};

clearDisplay("click", ".clear", () => {
    n1 = "";
    n2 = "";
    operator = "";
    displayValue = "0.0";
    display.textContent = displayValue;
});

// Prende le variabili n1 n2 operator e chiama la funzione operate dandone il risulato
function giveResult(type, CssSelector, callbackF) {
    otherBtnContainer.addEventListener(type, e => {
        if (e.target.matches(CssSelector)) {
            callbackF();
        };
    });
};

giveResult("click", ".result", () => {
    if (n1 !== "" && n2 !== "" & operator !== "") {
        let result = operate(parseInt(n1), operator, parseInt(n2));
        displayValue = result;
        display.textContent = displayValue;
    };
});

// Creare una funzione getNumbers
// Creare una funzione getOperators