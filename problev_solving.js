// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. Example Input: "hello world" Example Output: "dlrow olleh"

function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

console.log(reverseString("hello world"));


// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. Example Input: [2, -5, 10, -3, 7] Example Output: 19

function positiveNumberSum(ary) {
    let sum = 0;
    for (let num of ary) {
        if (num > 0) {
            sum += num;
        }
    }
    return sum;
}

console.log(positiveNumberSum([2, -5, 10, -3, 7]));