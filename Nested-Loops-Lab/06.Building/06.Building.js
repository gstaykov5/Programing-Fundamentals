function solve(input) 
{   
    let floor = Number(input[0]);
    let apartment = Number(input[1]);

    for (let i = floor; i > 0; i--){
        let result = '';
        for (let z = 0; z < apartment; z++){
            if (floor === i){
                result += `L${i}${z} `;
            } else  if (i % 2 === 0){
                result += `O${i}${z} `;
            } else {
                result += `A${i}${z} `;
            }
        }
        console.log(`${result}`);
    }
    
    
    
}