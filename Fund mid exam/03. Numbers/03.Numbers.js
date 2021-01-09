function solve(array) {
    array = array.split(' ')
    array.sort((a, b) => b - a);
    let sum = 0;
    let counter = 0

    array.forEach(number => {
        sum += Number(number);
        counter++
    });

    sum /= counter;
    let greaterNumbers = [];

    for (let i = 0; i < 5; i++) {
        const element = array[i];

        if (element > sum) {
            greaterNumbers.push(element);
        }
    }

    greaterNumbers = greaterNumbers.join(' ');
    greaterNumbers.length > 0 ? console.log(greaterNumbers) : console.log('No');
}