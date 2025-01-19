//2. Create a calculator function that takes two numbers and an operator (+, -, *, /) as argument of the function and returns the result.

function calculator(num1, num2, operator) {
    switch(operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                return 'Error-Division by zero';
            }
        default:
            return 'Error-Invalid operator';
    }
}
console.log(calculator(5, 3, '+'));         //5+3=8
console.log(calculator(10, 2, '-'));        //5-2=8
console.log(calculator(4, 7, '*'));          //4*7=28
console.log(calculator(20, 4, '/'));         //20/4=5
console.log(calculator(10, 0, '/'));        //division by zero