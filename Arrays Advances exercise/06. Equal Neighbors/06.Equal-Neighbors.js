function solve(array = []) {
    let currentElement = array[0];
    let counter = 0;
    for (let i = 1; i < array.length; i++) {
        const element = array[i];

        for (let j = 0; j < element.length; j++) {
            if (currentElement[j] === element[j]) {
                counter++
            }
            
            if (currentElement[j] === currentElement[j + 1]) {
                counter++
            }
        }   
        currentElement = element;
    }

    for (let i = 0; i < currentElement.length; i++) {
        if (currentElement[i] === currentElement[i + 1]) {
            counter++
        }
    }

    return counter;
} 