'use strict';

const resultsArray = [[6, [7, 8]], 1, [2, 3], [[4, 5]],9];
const productOfArray = (array, result = 1) => {
    array.forEach(i => {
        typeof(i) !== "object" ? result *= i : result *= productOfArray(i);
    });
    return result;
}

console.log(productOfArray(resultsArray)); // expected output 362880