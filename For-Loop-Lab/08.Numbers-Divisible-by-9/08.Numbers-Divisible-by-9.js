function solve(arg1, arg2) 
{
    arg1 = Number(arg1);
    arg2 = Number(arg2);
    let sum = 0;
    for (let i = arg1; i < arg2; i++){
        let currentNum = Number(i);
        

        if(currentNum % 9 === 0){
            sum += currentNum;
            
           
        }
    }
    console.log(`The sum: ${sum}`);
    for (let i = arg1; i < arg2; i++){
        let currentNum = Number(i);
        

        if(currentNum % 9 === 0){
            sum += currentNum;
            
            console.log(`${currentNum}`);
        }
    }
   
    
}