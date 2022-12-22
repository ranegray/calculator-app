const calcDisplay = document.querySelector('#calc-display');
const clearBtn = document.querySelector('.clear');
const digits = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('.equal');
let num1 = '';
let num2 = '';
let operator = null;
let shouldResetDisplay = false;

const add = (n1, n2) => {
    return Number(n1) + Number(n2);
};
const subtract = (n1, n2) => {
    return n1 - n2
};
const divide = (n1, n2) => {
    if (n2 === 0) {
        return null
    }else {
        return n1 / n2
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
    operator = symbol;
    shouldResetDisplay = true;   
    num1 = calcDisplay.innerHTML; 
}

const appendNum = (num) => {
    if (calcDisplay.textContent === 0 || shouldResetDisplay) {
        resetDisplay();
    }
    calcDisplay.textContent += num;
}

const resetDisplay = () => {
    calcDisplay.textContent = '';
}

const calculate = () => {
    num2 = calcDisplay.innerHTML;
    calcDisplay.textContent = operate(operator, num1, num2);
}

equals.addEventListener('click', calculate)

const clear = () => {
    num1 = '';
    num2 = '';
    operator = null;
    shouldResetDisplay = false;
    calcDisplay.textContent = 0;
}

clearBtn.addEventListener('click', clear);