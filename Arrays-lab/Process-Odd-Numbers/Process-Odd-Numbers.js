function solve(array = []) {
    let sum = 0;
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        if (i % 2 !== 0) {
            const current = array[i];
            sum = current * 2;
            newArray.push(sum);
        }
    }
        
    const finish = newArray.reverse();
    finish.join(' ')
    console.log(finish);
} 