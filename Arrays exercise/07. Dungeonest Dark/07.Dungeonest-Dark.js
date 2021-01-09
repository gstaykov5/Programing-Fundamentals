function solve(array = [], rounder) {
    array = array.toString().split('|');
    let health = 100;
    let coins = 0;
    let room = 0;

    for (let i = 0; i < array.length; i++) {
        const element = array[i].split(' ');
        const element1 = element[0];
        const element2 = Number(element[1]);

        if (element1 === 'potion') {
            room++;

            if (health + element2 > 100) {
                let dif = 100 - health;
                health = 100;
                console.log(`You healed for ${dif} hp.`);
                console.log(`Current health: ${health} hp.`);
            } else {
                health += element2;
                console.log(`You healed for ${element2} hp.`);
                console.log(`Current health: ${health} hp.`);
            }

        } else if (element1 === 'chest') {
            coins += element2;
            room++;
            console.log(`You found ${element2} coins.`);

        } else {
            health -= element2;
            room++;

            if (health <= 0) {
                console.log(`You died! Killed by ${element1}.\nBest room: ${room}`);
                break;
            } else {
                console.log(`You slayed ${element1}.`)
            }
        }
    }

    if (health > 0) {
        console.log(`You've made it!`);
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}