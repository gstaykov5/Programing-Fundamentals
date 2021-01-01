function solve(input) 
{
    const grades = Number(input[0]);
    let currentProblem = input[1];
    let totalSum = 0;
    let sum = 0;
    let index = 2;
    let count = 0;

    while(currentProblem !== 'Finish'){
        for(let i = 1; i <= grades; i++){ 
            sum += Number(input[index]);
            index++;
            count++;
        }
        console.log(`${currentProblem} - ${(sum / grades).toFixed(2)}.`)
        currentProblem = input[index];
        index++
        totalSum += sum;
        sum = 0;
        

    }
        totalSum /= count
        console.log(`Student's final assessment is ${totalSum.toFixed(2)}.`) 
 
}