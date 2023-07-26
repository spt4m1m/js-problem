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


// Task 3: Write a JavaScript program to find the most frequent element in an array and return it.  Example Input: [3, 5, 2, 5, 3, 3, 1, 4, 5] Example Output: 3

function frequentNumber(arr) {
    let counts = {};
    let maxCount = 0;
    let frequentNum;

    for (let num of arr) {
        counts[num] = (counts[num] || 0) + 1;
        if (counts[num] > maxCount) {
            maxCount = counts[num];
            frequentNum = num;
        }
    }

    return frequentNum;
}

console.log(frequentNumber([3, 5, 2, 5, 3, 3, 1, 4, 5]));


// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers. Example Input: ([1, 3, 6, 8, 11, 15], 9) Example Output: [1, 2] (numbers at indices 1 and 2: 3 + 6 = 9)

function twoNumberSum(ary, target) {
    let left = 0;
    let right = ary.length - 1;

    while (left < right) {
        const sum = ary[left] + ary[right];
        if (sum === target) {
            return [left, right];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

    return null;
}

console.log(twoNumberSum([1, 3, 6, 8, 11, 15], 9));