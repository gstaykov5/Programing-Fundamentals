function solve(array, rounder) {
    let newArray = [];


    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        let checker = true;

        for (let w = i; w < array.length; w++) {
            const element1 = array[w + 1];

            if (element <= element1) {
                checker = false;
                break;
            }
        }

        if (checker === true) {
            newArray.push(element)
        }
    }

    return newArray.join(' ')
}