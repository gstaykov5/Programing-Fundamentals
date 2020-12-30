function solve(input) 
{
    let currentProblem = input[0];
    let index = 0;

    while(currentProblem !== 'Stop'){
        console.log(`${currentProblem}`);
        index++
        currentProblem = input[index];
    }

}