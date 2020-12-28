function solve(input) {
    input = Number(input);
    let metersPrice = 7.61;
    let totalPrice = input * metersPrice;
    let discount = totalPrice * 0.18;
    let final = totalPrice - discount;
    
    console.log(`The final price is: ${final} lv.`);
    console.log(`The discount is: ${discount} lv.`)

}