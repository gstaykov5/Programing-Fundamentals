function solve(array) {
    let loot = {};

    for (let i = 0; i < array.length; i += 2) {
        const resours = array[i];
        const quantity = Number(array[i + 1]);

        if (!loot.hasOwnProperty(resours)) {
            loot[resours] = quantity;
        } else {
            for (const key in loot) {
                if (key === resours) {
                    loot[key] += quantity;
                }
            }
        }



    };

    for (const key in loot) {
        console.log(`${key} -> ${loot[key]}`);
    }
};