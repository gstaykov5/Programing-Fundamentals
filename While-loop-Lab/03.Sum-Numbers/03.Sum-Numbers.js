function solve(input) 
{
    let current = Number(input[0]);
    let current1 = Number(input[1]);
    let index = 1;
    let sum = 0;

    while(sum < current){
        sum += Number(current1);
        index++
        current1 = Number(input[index]);
    }
    console.log(`${sum}`)

}