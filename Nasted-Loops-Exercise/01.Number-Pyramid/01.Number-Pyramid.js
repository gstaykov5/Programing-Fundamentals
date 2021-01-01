function solve(input) 
{
    let n = Number(input[0]);
    let current = 0;
    let done = false;

    for(let r = 1; r <= n; r++){
        let result = '';
        for(let c = 1; c <= r; c++){
            current++;
            result += current  + ' ';
            if(current >= n){
                break;
            }
            
        }
        console.log(result);
        if(current >= n){
            break;
        }
    }
    
 
}