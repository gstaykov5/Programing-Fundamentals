function solve(flower, count, budget) 
{
    count = Number(count);
    budget = Number(budget);

    let result = 0;

    if (flower === 'Roses') {
        result = count * 5;
        if(count > 80){
            result *= 0.9;
        }
    } else if (flower === 'Dahlias') {
        result = count * 3.8;
        if(count > 90){
            result *= 0.85;
        }
    } 
    else if (flower === 'Tulips') {
        result = count * 2.8;
        if(count > 80){
            result *= 0.85;
        }
    } 
    else if (flower === 'Narcissus') {
        result = count * 3;
        if(count < 120){
            result *= 1.15;
        }
    } 
    else if (flower === 'Gladiolus') {
        result = count * 2.5;
        if(count < 80){
            result *= 1.2;
        }
    }

    let diff = budget - result;
    if ( budget >= result){
        console.log(`Hey, you have a great garden with ${count} ${flower} and ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${Math.abs(diff).toFixed(2)} leva more.`)
    }

}