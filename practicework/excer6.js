const fibbRec = (n) => {
    if (n <= 1) {
        return n;
    } else {
        return fibbRec(n - 1) + fibbRec(n - 2);
    }
};

// Example of use
console.log(fibbRec(4)); // -> 3
console.log(fibbRec(7)); // -> 13
