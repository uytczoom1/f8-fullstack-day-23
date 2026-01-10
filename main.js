Exercise 1: Triangle Classification

function classifyTriangle(a, b, c) {
    if (a + b > c && a + c > b && b + c >a) {
        if (a === b && b === c) {
            return `Equilateral Triangle`;
        }

        if (a === b || b === c || c === a) {
            return `Isosceles Triangle`;
        }

        if (a * a + b * b === c * c || a * a + c * c === b * b || c * c + b * b === a * a) {
            return `Right Triangle`;
        }

        return `Scalene Triangle`;
    } else {
        return `Not a Triangle`;
    }
}

console.log(classifyTriangle(3, 3, 3)); // Equilateral Triangle
console.log(classifyTriangle(3, 4, 5)); // Right Triangle
console.log(classifyTriangle(1, 2, 10)); // Not a Triangle


Exercise 2: Perfect Square Check

function isPerfectSquare(n) {
    if (n < 0) return false;

    let squareRoot = Math.sqrt(n);

    return Number.isInteger(squareRoot);
}

console.log(isPerfectSquare(16)); // true
console.log(isPerfectSquare(7));  // false
