function solve(input) 
{
    let neededMoney = Number(input[0]);
    let moneyOnHand = Number(input[1]);
    let index = 2;
    let counter = 0;
    let days = 0;
    let command = input[2];
    let currendMoney = Number(input[3]);

    while (moneyOnHand < neededMoney){
        counter++
        if (command == 'spend'){
            if (currendMoney > moneyOnHand){
                moneyOnHand = 0;
            } else {
                moneyOnHand -= currendMoney;
            }
            days++
        } else {
            moneyOnHand += currendMoney;
        }
        
        if (days >= 5){
            console.log(`You can't save the money.`);
            console.log(`${counter}`);
            break;
        }
        
        index += 2
        command = input[index];
        currendMoney = Number(input[index + 1]);
    }

    if (moneyOnHand >= neededMoney){
        console.log(`You saved the money for ${counter} days.`);
    }
    
}