function solve(array) {
    let totalPrice = 0;
    let command = '';

    array.forEach(p => {
        let price = Number(p);

        if (price >= 0) {
            if (p !== 'special' && p !== 'regular') {
                totalPrice += Number(price);
            }
        } else if (p == 'special' || p == 'regular') {
            command = p;
        } else {
            console.log('Invalid price!');
        }

    });

    let discount = 0;
    if (totalPrice > 0 && command === 'special') {
        discount = Number((totalPrice * 0.2).toFixed(2));
        let price = totalPrice;
        totalPrice += discount;
        let disc = totalPrice * 0.1;
        totalPrice -= disc;
        console.log("Congratulations you've just bought a new computer!");
        console.log(`Price without taxes: ${price}$`);
        console.log(`Taxes: ${discount}$`);
        console.log('-----------');
        console.log(`Total price: ${(totalPrice).toFixed(2)}$`);
    } else if (totalPrice > 0 && command === 'regular') {
        discount = Number((totalPrice * 0.2).toFixed(2));
        let price = totalPrice;
        totalPrice += discount;
        console.log("Congratulations you've just bought a new computer!");
        console.log(`Price without taxes: ${price}$`);
        console.log(`Taxes: ${discount}$`);
        console.log('-----------');
        console.log(`Total price: ${(totalPrice).toFixed(2)}$`);
    } else {
        console.log('Invalid order!');
    }

}