function solve(input) 
{
    let maxNumber = Number.MIN_SAFE_INTEGER;
    let index = 0;
    let comand = input[index];
    let num = 0;

    while (comand !== 'Stop'){
        num = Number(comand);
        if (num > maxNumber){
            maxNumber = num;
        }
        index++
        comand = input[index];
    }

    console.log(`${maxNumber}`)
}