const calcDisplay = document.querySelector('#calc-display');
const clearBtn = document.querySelector('.clear');
const digits = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('.equal');
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
    if (isFinite(parseFloat(n1 / n2).toFixed(2))) {
        return parseFloat(n1 / n2).toFixed(2);
    } else {
        return 'ERROR';
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
        calcDisplay.textContent = operate(operator, num1, num2);
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

const appendNum = (num) => {
    if (calcDisplay.textContent === 0 || shouldResetDisplay) {
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
        calcDisplay.textContent = operate(operator, num1, num2);
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