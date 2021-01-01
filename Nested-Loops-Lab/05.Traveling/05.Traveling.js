function solve(input) 
{   
    let destination = input[0];
    let neededMoney = Number(input[1]);
    let currentMoney = Number(input[2]);
    let index = 0;
    let sum = 0;
    
    
    while(destination !== 'End'){
        
        for(let i = 2; i < input.length; i++){
            sum += Number(input[i]) 
            if (sum >= neededMoney){
                console.log(`Going to ${destination}!`);
                sum = 0;
                destination = input[i + 1];
                neededMoney = Number(input[i + 2]);
                i += 2
            } 

        }
        
    }
    
    
}