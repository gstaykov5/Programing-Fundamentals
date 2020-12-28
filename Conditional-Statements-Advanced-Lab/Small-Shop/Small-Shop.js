function solve(product, city, count) {
    count = Number(count);

    if (city === 'Sofia') {
        if (product === 'coffee') {
            console.log(count * 0.5);
        } else if (product === 'water') {
            console.log(count * 0.8);
        } else if (product === 'beer') {
            console.log(count * 1.2);
        } else if (product === 'sweets') {
            console.log(count * 1.45);
        } else if (product === 'peanuts') {
            console.log(count * 1.6);
        }
    } else if (city === 'Plovdiv') {
        if (product === 'coffee') {
            console.log(count * 0.4);
        } else if (product === 'water') {
            console.log(count * 0.7);
        } else if (product === 'beer') {
            console.log(count * 1.15);
        } else if (product === 'sweets') {
            console.log(count * 1.3);
        } else if (product === 'peanuts') {
            console.log(count * 1.5);
        }
    } else if (city === 'Varna') {
        if (product === 'coffee') {
            console.log(count * 0.45);
        } else if (product === 'water') {
            console.log(count * 0.7);
        } else if (product === 'beer') {
            console.log(count * 1.1);
        } else if (product === 'sweets') {
            console.log(count * 1.35);
        } else if (product === 'peanuts') {
            console.log(count * 1.55);
        }
    }

}