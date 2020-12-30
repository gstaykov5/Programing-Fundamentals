function solve(input) 
{
    let counter = Number(input[0]);
    let num = 1;
    let index = 0;

    while(num <= counter){
        console.log(`${num}`);
        num =num * 2 + 1;
    }

}