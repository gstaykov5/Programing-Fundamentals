function solve(input) 
{
    let start = input[0];
    let end = input[1];
    let print = '';

    for(let i = start; i <= end; i++){
        let currentNum = '' + i;
        let odd = 0;
        let even = 0;
        for(let j = 0; j < currentNum.length; j++){
            let current = Number(currentNum.charAt(j));
            if(j % 2 === 0){
                even += current;
            } else {
                odd += current; 
            }
        }
        if(odd === even){
            print += `${i} `
        }
    }
    console.log(print)
 
}