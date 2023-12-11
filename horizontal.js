function horizontalStar(columns) {
    let pattern = "";
    for (let i = 0; i < columns; i++) {
        pattern += " * ";
    }
    console.log(pattern);
}


const numberOfStars = 9;
horizontalStar(numberOfStars);
