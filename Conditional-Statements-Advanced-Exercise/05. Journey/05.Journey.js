function solve(budget, season, count) 
{
    budget = Number(budget);
    count = Number(count);

    let total = 0;
    let destination = '';
    let type = '';

    if (budget <= 100){
        destination = `Bulgaria`;
        if(season === 'summer'){
            type = 'Camp';
            total = budget * 0.3;
        } else {
            type = 'Hotel';
            total = budget * 0.7;
        }
    } else if (budget <= 1000){
        destination = `Balkans`;
        if(season === 'summer'){
            type = 'Camp';
            total = budget * 0.4;
        } else {
            type = 'Hotel';
            total = budget * 0.8;
        }
    } else if (budget > 1000){
        destination = `Europe`;
        type = 'Hotel';

        total = budget * 0.9;
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${type} - ${total.toFixed(2)}`);

    
}