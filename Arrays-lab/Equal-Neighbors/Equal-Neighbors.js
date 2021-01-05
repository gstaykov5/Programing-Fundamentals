function solve(array) {
    let counter = 0;

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        
        for (let z = 0; z < element.length; z++) {
            const element2 = element[z];
            
            if (element2 === element[z + 1]) {
                counter++;
            }
        }
    }

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        const element2 = array[i + 1];
        if (element2 === undefined) {
            break;
        }

        for (let z = 0; z < element.length; z++) {
            const element3 = element[z];
            const element4 = element2[z]
             if (element3 === element4) {
                 counter++;
             }
        }
    }
    return counter;
}