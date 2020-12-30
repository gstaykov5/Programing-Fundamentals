function solve(input) 
{
    let currentMoney = Number(input[0]);
    let index = 0;
    let totalMoney = 0;

    while(currentMoney !== 'NoMoreMoney'){
        if (currentMoney < 0){
            console.log('Invalid operation!');
            break;
        }
        console.log(`Increase: ${Number(currentMoney).toFixed(2)}`);
        totalMoney += Number(currentMoney);
        index++
        currentMoney = input[index];

    }
    console.log(`Total: ${totalMoney.toFixed(2)}`);

}