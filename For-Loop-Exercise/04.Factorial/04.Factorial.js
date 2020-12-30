function solve(num) 
{
    
    num = Number(num);
    let sum = 1;

    for (let i = 1; i <= num; i++){
        sum *= i;    
    }
    console.log(sum);
    
}