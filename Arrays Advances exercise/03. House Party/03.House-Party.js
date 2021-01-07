function solve(array = []) {
    let newArray = [];
    
    
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        let single = array[i].split(' ');

        for (let j = 0; j < single.length; j++) {
            const name = single[j];

            if (!newArray.includes(name) && single[j + 2] !== 'not') {
                newArray.push(name);
                break;
            } else if (newArray.includes(name) && single[j + 2] !== 'not') {
                console.log(`${name} is already in the list!`);
                break;
            } else if (newArray.includes(name) && single[j + 2] === 'not') {
                newArray.pop();
                break;
            } else if (single[j + 2] === 'not' && !newArray.includes(name)) {
                console.log(`${name} is not in the list!`);
                break;
            }
        }
    }
    return newArray.join(`\n`)
}