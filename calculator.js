let n1 = "";
let n2 = "";
let operator = "";
let displayValue = "";

const calculatorContainer = document.querySelector(".calculatorContainer");
const numbersContainer = document.querySelector(".numbersContainer");
const operatorsContainer = document.querySelector(".operatorsContainer");
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

function operate(n1, n2, operator) {
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


calculatorContainer.addEventListener("click", e => {
    if (e.target.matches(".btnN") && operator !== "") {
        n2 += parseInt(e.target.textContent);
        displayValue = n1 + operator + n2;
        updateDisplay();
    }

    else if (e.target.matches(".btnO")) {
        operator = e.target.textContent;
        displayValue = n1 + operator;
        updateDisplay();
    }

    else {
        n1 += parseInt(e.target.textContent);
        displayValue = n1;
        updateDisplay();
    };

});


function updateDisplay() { display.textContent = displayValue }


function clearDisplay(type, CssSelector, callbackF) {
    calculatorContainer.addEventListener(type, e => {
        if (e.target.matches(CssSelector)) {
            callbackF()
        }
    });
};


clearDisplay("click", ".clear", () => {
    n1 = "";
    n2 = "";
    operator = "";
    display.textContent = "0.0"
});