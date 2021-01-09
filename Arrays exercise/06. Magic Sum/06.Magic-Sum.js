function solve(array = [], rounder) {
    let splitet = array.slice(0);

    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        for (let w = i + 1; w < splitet.length; w++) {
            const element1 = array[w];
            if (element + element1 === rounder) {
                console.log(`${element} ${element1}`);
            }
        }
    }
}