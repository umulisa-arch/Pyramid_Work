const add = (a, b) => Number.isInteger(a) && Number.isInteger(b) ? a + b : NaN;
const sub = (a, b) => Number.isInteger(a) && Number.isInteger(b) ? a - b : NaN;
const mult = (a, b) => Number.isInteger(a) && Number.isInteger(b) ? a * b : NaN;

// Example of use:
console.log(sub(12, 10)); // -> 2
console.log(mult(10, 10.1)); // -> NaN
