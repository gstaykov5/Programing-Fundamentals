function solve(array = []) {
    let finalArray = [];

    for (const i of array) {
        if (!finalArray.includes(i)) {
            finalArray.push(i);
        }
    }
    return finalArray.join(' ')
} 