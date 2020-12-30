function solve(input) 
{
    
    let n = Number(input[0]);
    let small = Number(input[1]);

    for (let i = 2; i < input.length; i++){
        let smallest = Number(input[i]);

        if (smallest < small){
            small = smallest;
        }
    }
    console.log(small)

}