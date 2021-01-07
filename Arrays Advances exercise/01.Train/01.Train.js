function solve(array = []) {
    let wagons = array.shift().split(' ').map(x => Number(x));
    let maxCapacity = Number(array.shift());

    for (let i = 0; i < array.length; i++) {
        const element = array[i].split(' ');

        if (element.length === 2) {
            wagons.push(Number(element[1]))
        } else if (element.length === 1) {
            let passengers = Number(element);
            for (let j = 0; j < wagons.length; j++) {
                if (wagons[j] + passengers <= maxCapacity) {
                    wagons[j] += passengers;
                    break;
                }
            }
        }
    }
    return wagons.join(' ');
} 