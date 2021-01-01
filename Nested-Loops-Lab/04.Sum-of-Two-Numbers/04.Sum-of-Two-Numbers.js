function solve(input) 
{   
    let star = Number(input[0]);
    let end = Number(input[1]);
    let magic = Number(input[2]);
    let sum = 0;
    let count = 0;

    for(let i = star; i <= end; i++){
        for(let z = star; z <= end; z++){
            sum = i + z;
            count++;
            if (sum === magic){
                console.log(`Combination N:${count} (${i} + ${z} = ${i+z})`);
                break;
            }
        }
        if(sum === magic){
            break;
        }
        
    }
    if(sum != magic){
        console.log(`${count} combinations - neither equals ${magic}`)
    }
}