function solve(array) {
    let wagons = array.pop().split(' ');
    let people = Number(array[0]);
    let wagon = 0;

    for (let i = 0; i < wagons.length; i++) {
        wagon = Number(wagons[i]);
        
        if (wagon < 4) {
            let difference = 4 - wagon;

            if(wagon === 0 && people > 3) {
                wagons.splice(i, 1, 4);
                people -= 4
            } else if(wagon !== 0 && people > 3) {
                wagons.splice(i, 1, 4);
                people -= difference
            } else {
                wagons.splice(i, 1, people);
                people = 0;
            }
        }
        
        if(people === 0) {
            console.log('The lift has empty spots!');
            console.log(`${wagons.join(' ')}`);
            break;
        }
    }

    if (people > 0) {
        console.log(`There isn't enough space! ${people} people in a queue!`);
        console.log(`${wagons.join(' ')}`);
    }

}