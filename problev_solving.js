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


// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

function calculator(num1, operator, num2) {
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
        default:
            return "Invalid operator";
    }
}

console.log(calculator(10, "+", 5));


// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

function randomPasswordGenerator(length) {
    const charset =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}

console.log(randomPasswordGenerator(12));


// Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

function ramanNumToInteger(roman) {
    const romanNumsObj = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let result = 0;
    for (let i = 0; i < roman.length; i++) {
        const current = romanNumsObj[roman[i]];
        const next = romanNumsObj[roman[i + 1]];

        if (next && current < next) {
            result += next - current;
            i++;
        } else {
            result += current;
        }
    }

    return result;
}

console.log(ramanNumToInteger("IX"));


// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

function secondSmallestElement(ary) {
    let smallest = Infinity;
    let secondSmallest = Infinity;

    for (let num of ary) {
        if (num < smallest) {
            secondSmallest = smallest;
            smallest = num;
        } else if (num < secondSmallest && num !== smallest) {
            secondSmallest = num;
        }
    }

    return secondSmallest;
}

console.log(secondSmallestElement([1, 5, 2, 8, 3, 7, 6, 4]));