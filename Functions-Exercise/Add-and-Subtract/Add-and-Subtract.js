function addAndSubtract(a, b, c) {
    function add(numOne, numTwo) {
        return numOne + numTwo;
    }

    function subtract(a, b) {
        return a - b;
    }

    let addResult = add(a, b);
    let res = subtract(addResult, c);
    console.log(res)
}