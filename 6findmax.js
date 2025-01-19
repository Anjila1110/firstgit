//Write a function findMax that accepts an array of numbers and returns the maximum value. 

function findMax(numbers) {
    if (numbers.length == 0) {
        return undefined;  // Handle empty array case
    }

    let max = numbers[0];       // Start by assuming the first element is the max

    // Loop the array to find the max value
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];           // Update value of max if a larger value is found
        }
    }

    return max;
}
const nums = [8,10,11,15,80,25];
console.log(findMax(nums));  // Output: 80
