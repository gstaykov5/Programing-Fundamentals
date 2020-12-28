function solve(arg1, arg2, arg3) {
    let figure = arg1;
    let sideA = arg2;
    let sideB = arg3;
    let area = 0;

    if (figure === 'square') {
        area = sideA * sideA;

    } else if (figure === 'rectangle') {
        area = sideA * sideB;

    } else if (figure === 'circle') {
        area = Math.PI * arg2 * arg2;

    } else if (figure === 'triangle') {
        area = (sideA * sideB) / 2;
    }
    console.log(area.toFixed(3));
}