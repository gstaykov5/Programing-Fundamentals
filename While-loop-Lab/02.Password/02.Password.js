function solve(input) 
{
    let user = input[0];
    let pass = input[1];
    let data = input[2];
    let index = 2;

    while(data !== pass){
        index++
        data = input[index];
    }
    console.log(`Welcome ${user}!`)

}