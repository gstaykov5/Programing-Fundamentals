function solve(array) {
    sum = 0;
    array = array.toString()
    for (const iterator of array) {
        sum += Number(iterator)
    }
    return sum;
}