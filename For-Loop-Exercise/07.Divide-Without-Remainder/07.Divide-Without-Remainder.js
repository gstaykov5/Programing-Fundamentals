function solve(input) 
{
    let count = Number(input[0]);
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
   

    for (let i = 1; i < input.length; i++){
        let num = Number(input[i]);

        if (num % 3 === 0){
            p2++
        }
        if (num % 2 === 0){
            p1++
            if (num % 4 === 0){
                p3++
            } 
        }  
    }
    console.log(`${(p1 / count * 100).toFixed(2)}%`);
    console.log(`${(p2 / count * 100).toFixed(2)}%`);
    console.log(`${(p3 / count * 100).toFixed(2)}%`);
    
}