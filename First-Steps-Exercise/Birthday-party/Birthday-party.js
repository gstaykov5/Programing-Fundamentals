function solve(hallPrice) {
    let price = Number(hallPrice);

    let cake = price * 0.2;
    let drinks = cake - cake * 0.45;
    let animator = price / 3;
    let totalPrice = price + cake + drinks + animator;
    

    console.log(totalPrice);
    
}