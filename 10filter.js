//Write a program that filters out even numbers from an array and returns a new array with only the odd numbers. 

//array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//to return odd number array
const oddNumbers = numbers.filter(num => num % 2 !== 0);

console.log(oddNumbers); // Output: [1, 3, 5, 7, 9]