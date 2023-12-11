const printNumbers = (n, count = 1) => {
    console.log(count);
    count++;
    return count <= n ? setTimeout(() => printNumbers(n, count), 2000) : null;
};

// Example of use: Print numbers 1 to 10
printNumbers(10);
