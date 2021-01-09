function solve(array) {
    let modifiedArray = array.shift().split(' ');

    array.forEach(element => {
        let [command, first, second] = element.split(' ');
        first = Number(first);
        second = Number(second);
        let counter = 0;

        if (command === 'swap') {
            let one = Number(modifiedArray.slice(first, first + 1));
            let two = Number(modifiedArray.slice(second, second + 1));
            modifiedArray.splice(first, 1, two)
            modifiedArray.splice(second, 1, one)
        } else if (command === 'multiply') {
            let one = Number(modifiedArray.slice(first, first + 1));
            let two = Number(modifiedArray.slice(second, second + 1));
            let sum = one * two;
            modifiedArray.splice(first, 1, sum);
        } else if (command === 'decrease') {
            modifiedArray.forEach(x => {
                x = Number(x) - 1;
                modifiedArray.splice(counter, 1, x)
                counter++

            })
        }
    });

    return modifiedArray.join(', ');

}