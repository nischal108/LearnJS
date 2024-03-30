function trianglecheck(a, b, c) {
    if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number") {
        return false;
    } else if (a === b && a === c) {
        return "equilateral";
    } else if (a !== b && a !== c && b !== c) {
        return "scalene";
    } else {
        return "isosceles";
    }
}

console.log(trianglecheck(2, 1, 2));
