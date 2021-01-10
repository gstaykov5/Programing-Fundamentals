function solve(array, array1) {
    let newArray = [];
    let str = '';

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        const element2 = array1[i];

        if (i % 2 === 0) {
            str += `${Number(element) + Number(element2)} `;
        } else {
            str += `${element + element2} `;
        }
    }
    newArray = str.split(' ')
    newArray.pop()
    newArray = newArray.join(' - ');


    return newArray
}