function solve(ticket, row, column) {
    row = Number(row);
    column = Number(column);

    let income = 0;

    if (ticket === 'Premiere') {
        income = row * column * 12;
    } if (ticket === 'Normal') {
        income = row * column * 7.5;
    } if (ticket === 'Discount') {
        income = row * column * 5;
    }



    console.log(`${income.toFixed(2)} leva`);
}