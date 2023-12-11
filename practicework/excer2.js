function add(a, b) {
    if (Number.isInteger(a) && Number.isInteger(b)) {
        return a + b;
    } else {
        return NaN;
    }
}

function sub(a, b) {
    if (Number.isInteger(a) && Number.isInteger(b)) {
        return a - b;
    } else {
        return NaN;
    }
}

function mult(a, b) {
    if (Number.isInteger(a) && Number.isInteger(b)) {
        return a * b;
    } else {
        return NaN;
    }
}

// Example of use:
console.log(add(12, 10)); // -> 22
console.log(mult(12, 10.1)); // -> NaN
