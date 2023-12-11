function printPattern(rows) {
    for (let i = 1; i <= rows; i++) {
        let str = "";
        for (let j = 1; j <= rows - i; j++) {
            str += "   "; 
        }
        for (let k = 1; k <= i; k++) {
            str += " * ";
        }
        console.log(str);
    }
}


const numberOfRows = 8;
printPattern(numberOfRows);
