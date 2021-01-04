function solve(array = []) {
    let current = array[0];
    let newArray = [];

    for (const i of array) {
        if (i <= current) {
            current = i;
            newArray.unshift(i);

            if (newArray.length > 2) {
                newArray.pop();
            }
        }
    }
    let finish = newArray.join(' ')
    console.log(finish);
}