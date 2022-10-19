// stop calc-display from breaking by limiting digits to 9
const limit = () => operate().length > 9 ? 'ERROR' : operate()

const add = (n1, n2) => console.log(n1 + n2);
const subtract = (n1, n2) => console.log(n1 - n2);
const divide = (n1, n2) => console.log(n1 / n2);
const multiply = (n1, n2) => console.log(n1 * n2);

const operate = (operator, n1, n2) => {
    switch(operator){
        case '+':
            add(n1, n2);
            break;
        case '-':
            subtract(n1, n2);
            break;
        case '/':
            divide(n1, n2);
            break;
        case '*':
            multiply(n1, n2);
            break;
    }

};

