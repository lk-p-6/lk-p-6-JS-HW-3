'use strict';

const currentMaxValue = 12345;
const reverseMaxValue = Number(currentMaxValue.toString().split("").reverse().join(""));

console.log(`reverse number: ${reverseMaxValue} | type of reverse number: ${typeof(reverseMaxValue)}`);