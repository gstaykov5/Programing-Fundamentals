function solve(budget, statistCount, clothPricePerStatist) {
    budget = Number(budget);
    statistCount = Number(statistCount);
    clothPricePerStatist = Number(clothPricePerStatist);

    let clothPrice = statistCount * clothPricePerStatist;
    let decor = budget * 0.1;

    if (statistCount > 150) {
        clothPrice = clothPrice * 0.9;
    }
    let totalPrice = decor + clothPrice;
    let moneyLeft = Math.abs(budget - totalPrice).toFixed(2);

    if (totalPrice > budget) {
        console.log('Not enough money!');
        console.log(`Wingard needs ${moneyLeft} leva more.`)
    } else {
        
        console.log('Action!');
        console.log(`Wingard starts filming with ${moneyLeft} leva left.`);
    }
  
}