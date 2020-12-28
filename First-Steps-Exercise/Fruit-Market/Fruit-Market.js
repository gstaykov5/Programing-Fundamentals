function solve(strowberryPrice, banana, orange, raspberry, strowberry) {
    strowberryPrice = Number(strowberryPrice);
    banana = Number(banana);
    orange = Number(orange);
    raspberry = Number(raspberry);
    strowberry = Number(strowberry);

    let raspberryPrice = strowberryPrice / 2;
    let orangePrice = raspberryPrice - (raspberryPrice * 0.4);
    let bananaPrice = raspberryPrice - (raspberryPrice * 0.8);

    let raspberrySum = raspberry * raspberryPrice;
    let orangeSum = orange * orangePrice;
    let bananaSum = banana * bananaPrice;
    let strowberrySum = strowberry * strowberryPrice;

    let totalPrice = raspberrySum + orangeSum + bananaSum + strowberrySum;
    
    console.log(totalPrice.toFixed(2));
    
}