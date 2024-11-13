function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}

console.log(add(5,3));

function operate(operator,a,b) {

    a = Number(a);
    b = Number(b);

    if ( isNaN(a) || isNaN(b)) return "Invalid Input";

    switch(operator) {
        case'+':
                return add(a,b);
        case'-':
                return subtract(a,b);
        case'×':
                return multiply(a,b);
        case'÷':
                if (b == 0) return "Invalid";
                return divide(a,b);
    }
}