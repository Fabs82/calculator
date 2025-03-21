let n1 = 2;
let n2 = 3;
let operator = "+";


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

console.log(operate(n1, n2, operator));

