function solve(excursionPrice, puzzleCount, dollsCount, bearsCount, MinionsCount, trucksCount) {
    excursionPrice = Number(excursionPrice);
    puzzleCount = Number(puzzleCount);
    dollsCount = Number(dollsCount);
    bearsCount = Number(bearsCount);
    MinionsCount = Number(MinionsCount);
    trucksCount = Number(trucksCount);

    let puzzle = 2.6;
    let doll = 3;
    let bear = 4.1;
    let minion = 8.2;
    let truck = 2;

    let money = puzzleCount * puzzle + doll * dollsCount + bearsCount * bear + MinionsCount * minion + trucksCount * truck;
    let toyCount = puzzleCount + dollsCount + bearsCount + MinionsCount + trucksCount;

    if(toyCount >= 50) {
        money = money * 0.75;
    }
    money = money * 0.9;
    let totalMoney = Math.abs(money - excursionPrice).toFixed(2);

    if (money >= excursionPrice) {
        console.log(`Yes! ${totalMoney} lv left.`)
    } else {
        console.log(`Not enough money! ${totalMoney} lv needed.`)
    }
       
}