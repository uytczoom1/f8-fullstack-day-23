// Exercise 1: Triangle Classification

const getTriangleType = (a, b, c) => {
    if (typeof a !== "number" || a <= 0
        || typeof b !== "number" || b <= 0
        || typeof c !== "number" || c <= 0) return `Invalid input`;
    if (a + b > c && a + c > b && b + c >a) {
        if (a === b && b === c) return `Equilateral`;

        const isRight = (a * a + b * b === c * c || a * a + c * c === b * b || c * c + b * b === a * a);
        const isIsosceles = (a === b || b === c || c === a);

        if (isRight && isIsosceles) return `Right Isosceles`;
        if (isRight) return `Right`;
        if (isIsosceles) return `Isosceles`;

        return `Scalene`;
    } 
    else {
        return `Not a triangle`;
    }
}

console.log(getTriangleType(3, 3, 3)); // Equilateral
console.log(getTriangleType(3, 4, 5)); // Right
console.log(getTriangleType(1, 2, 10)); // Not a Triangle


// Exercise 2: Perfect Square Check

const isPerfectSquareNumber = (n) => {
    if (typeof n !== "number" || n < 0) return false;

    const root = n ** 0.5;
    return root % 1 === 0;
}

console.log(isPerfectSquareNumber(16)); // true
console.log(isPerfectSquareNumber(7));  // false
