function solve(array) {
    const result = [];

    for (const number of array) {
        if (number < 0) {
            result.unshift(number);
        } else {
            result.push(number);
        }
    }
    console.log(result);
} 