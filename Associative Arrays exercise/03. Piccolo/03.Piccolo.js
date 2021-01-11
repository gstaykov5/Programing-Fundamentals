function solve(array) {
    let parcingCars = {};

    array.forEach(element => {
        const [comand, carNumber] = element.split(', ');
        if (comand === 'IN') {
            parcingCars[carNumber] = 1;
        } else {
            delete parcingCars[carNumber]
        }
    });

    return Object.keys(parcingCars)
        .sort((a, b) => a.localeCompare(b))
        .join('\n')
}