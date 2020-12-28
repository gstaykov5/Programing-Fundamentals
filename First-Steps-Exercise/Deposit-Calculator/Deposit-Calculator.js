function solve(amount, term, percent) {
    amount = Number(amount);
    term = Number(term);
    percent = Number(percent);

    let year = amount * percent / 100;

    let month = year / 12;

    let result = amount + term * month;

    
    console.log(result.toFixed(2));
    
}