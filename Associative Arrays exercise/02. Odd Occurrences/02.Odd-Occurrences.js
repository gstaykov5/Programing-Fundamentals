function solve(array) {
    array = array.split(' ');
    const sortedObj = new Map();
    let str = ''

    array.forEach(element => {
        let ele = element.toLowerCase();
        !sortedObj.has(ele) ? sortedObj.set(ele, 1) : sortedObj.set(ele, sortedObj.get(ele) + 1);
    });


    for (const key of sortedObj) {
        if (key[1] % 2 !== 0) {
            str += `${key[0]} `;
        }
    }
    console.log(str.trim());
}