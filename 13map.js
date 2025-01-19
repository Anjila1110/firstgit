//Use map to create a new array where each number in an array is doubled

const numbers = [10, 20, 30, 40, 50];

const doubledNumbers = numbers.map(num => num * 2);         //The map method creates a new array by applying a provided function to each element of the original array and returns it with transformed elements. 

console.log(doubledNumbers);                //output:[ 20, 40, 60, 80, 100 ]