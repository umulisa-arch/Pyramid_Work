function pascalsPyramid(rows) {
    let pyramid = [];

    for (let i = 0; i < rows; i++) {
        pyramid[i] = [];
        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                pyramid[i][j] = 1;
            } else {
                pyramid[i][j] = pyramid[i - 1][j - 1] + pyramid[i - 1][j];
            }
        }
    }

    return pyramid;
}

function printPascalsPyramid(rows) {
    const pyramid = pascalsPyramid(rows);

    for (let i = 0; i < rows; i++) {
        let str = "";
        for (let j = 0; j < rows - i - 1; j++) {
            str += " ";
        }
        for (let j = 0; j <= i; j++) {
            str += pyramid[i][j] + " ";
        }
        console.log(str);
    }
}


const numberOfRows = 5;
printPascalsPyramid(numberOfRows);
