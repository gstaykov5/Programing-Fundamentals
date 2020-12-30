function solve(input) 
{
    
    

    let space = 0;

    for(let i = 0; i < input.length; i++){
        let text = input[i];

        if(text === ' '){
            space++
        }
    }

    space++

    if(space <= 10){
        console.log('The message was send successfully!');
    } else {
        console.log(`The message is too long to be send! Has ${space} words.`)
    }
}