const action = (callback, num1, num2) => callback(num1, num2);

// Functions from previous tasks
const add = (a, b) => Number.isInteger(a) && Number.isInteger(b) ? a + b : NaN;
const sub = (a, b) => Number.isInteger(a) && Number.isInteger(b) ? a - b : NaN;
const multi = (a, b)=> Number.isInteger(a) && Number.isInteger(b) ? a * b: NaN;

// Example of use
console.log(action(add, 12, 10)); // -> 22
console.log(action(sub, 12, 10)); // -> 2
console.log(multi(10, 10.1));//
