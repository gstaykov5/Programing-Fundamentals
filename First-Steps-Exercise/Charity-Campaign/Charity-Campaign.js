function solve(daysCount, stuffCount, cakeCount, wafflesCount, pancakeCount) {
    daysCount = Number(daysCount);
    stuffCount = Number(stuffCount);
    cakeCount = Number(cakeCount);
    wafflesCount = Number(wafflesCount);
    pancakeCount = Number(pancakeCount);
    
    let cake = 45;
    let waffle = 5.8;
    let pancake = 3.2;

    let singleCakeCook = cakeCount * cake;
    let singleWaffleCook = wafflesCount * waffle;
    let singlePancakeCook = pancakeCount * pancake;

    let total = ((singleCakeCook + singleWaffleCook + singlePancakeCook) * stuffCount) * daysCount;
    let totalSum = total - (total / 8);

    console.log(totalSum.toFixed(2));
    
}