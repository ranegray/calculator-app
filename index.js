const calcDisplay = document.querySelector('#calc-display');
const clearBtn = document.querySelector('.clear');
const digits = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('.equal');
const decimal = document.querySelector('.decimal')
let num1 = null;
let num2 = null;
let operator = null;
let shouldResetDisplay = true;

const add = (n1, n2) => {
    return Number(n1) + Number(n2);
};
const subtract = (n1, n2) => {
    return n1 - n2
};
const divide = (n1, n2) => {
    if (isNaN(n1 / n2)) {
        return n1 / n2;
    } else {
        return 'Error';
    }
};
const multiply = (n1, n2) => {
    return n1 * n2
};

const operate = (operator, n1, n2) => {
    switch(operator){
        case '+':
            return add(n1, n2);
        case '-':
            return subtract(n1, n2);
        case '/':
            return divide(n1, n2);
        case '*':
            return multiply(n1, n2);
    }

};

digits.forEach(digit => {
    digit.addEventListener('click', () => appendNum(digit.textContent))
});

operators.forEach(oper => {
    oper.addEventListener('click', () => setOperator(oper.innerHTML))
});

const setOperator = (symbol) => {
    if (num1 !== null){
        num2 = calcDisplay.innerHTML;
        calcDisplay.textContent = Math.round(((operate(operator, num1, num2)) + Number.EPSILON) * 100) / 100;
        num1 = null;
        shouldResetDisplay = true;
    }

    if (symbol === '+' || symbol === '-'){
        operator = symbol;
    } else if (symbol === '×'){
        operator = '*';
    } else if (symbol === '÷'){
        operator = '/';
    }

    shouldResetDisplay = true;   
    num1 = calcDisplay.innerHTML; 
}

const appendDec = () => {
    if (calcDisplay.textContent.includes('.')){
        return;
    } else {
        calcDisplay.textContent += '.';
        shouldResetDisplay = false;
    }
}

decimal.addEventListener('click', appendDec)

const appendNum = (num) => {
    if (shouldResetDisplay) {
        resetDisplay();
        shouldResetDisplay = false;
    }
    calcDisplay.textContent += num;
}

const resetDisplay = () => {
    calcDisplay.textContent = '';
}

const calculate = () => {
    if (operator !== null){
        num2 = calcDisplay.innerHTML;
        calcDisplay.textContent = Math.round(((operate(operator, num1, num2)) + Number.EPSILON) * 100) / 100;
    } else {
        return;
    }
}

equals.addEventListener('click', calculate)

const clear = () => {
    num1 = null;
    num2 = null;
    operator = null;
    shouldResetDisplay = true;
    calcDisplay.textContent = 0;
}

clearBtn.addEventListener('click', clear);