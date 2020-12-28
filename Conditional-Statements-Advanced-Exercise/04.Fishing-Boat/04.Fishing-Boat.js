function solve(budget, season, count) 
{
    budget = Number(budget);
    count = Number(count);

    let total = 0;

    if (season === 'Spring'){
        total = 3000;
        if (count <= 6){
            total = total * 0.9;
        } else if (count >= 7 && count <= 11){
            total = total * 0.85;
        } else if (count >= 12){
            total = total * 0.75;
        }
    }

    if (season === 'Summer' || season === 'Autumn'){
        total = 4200;
        if (count <= 6){
            total = total * 0.9;
        } else if (count >= 7 && count <= 11){
            total = total * 0.85;
        } else if (count >= 12){
            total = total * 0.75;
        }
    }

    if (season === 'Winter'){
        total = 2600;
        if (count <= 6){
            total = total * 0.9;
        } else if (count >= 7 && count <= 11){
            total = total * 0.85;
        } else if (count >= 12){
            total = total * 0.75;
        }
    }

    if (count % 2 === 0 && season !== 'Autumn'){
        total = total * 0.95;
    }

    if (budget >= total) {
        let moneyleft = budget - total;
        console.log(`Yes! You have ${moneyleft.toFixed(2)} leva left.`)
    } else {
        let moneyleft = total - budget;
        console.log(`Not enough money! You need ${moneyleft.toFixed(2)} leva.`)
    }

    
    
}
