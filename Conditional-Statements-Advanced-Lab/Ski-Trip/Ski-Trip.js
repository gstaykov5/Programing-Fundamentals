function solve(day, room, evaluation) {
    day = Number(day);

    let price = 0;
    let night = day - 1;

    if (day < 10) {
        if (room === 'room for one person') {
            price = night * 18;
        } else if (room === 'apartment') {
            price = (night * 25) * 0.7;
        } else if (room === 'president apartment') {
            price = (night * 35) * 0.9;
        }
    }

    else if (day >= 10 && day <= 15) {
        if (room === 'room for one person') {
            price = night * 18;
        } else if (room === 'apartment') {
            price = (night * 25) * 0.65;
        } else if (room === 'president apartment') {
            price = (night * 35) * 0.85;
        }
    }

    else if (day > 15) {
        if (room === 'room for one person') {
            price = night * 18;
        } else if (room === 'apartment') {
            price = (night * 25) * 0.5;
        } else if (room === 'president apartment') {
            price = (night * 35) * 0.8;
        }
    }
    
    if (evaluation === 'positive') {
        price = price + (price * 0.25)
    } else if (evaluation === 'negative') {
        price = price * 0.9;
    }





    console.log(price.toFixed(2));
}