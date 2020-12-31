function solve(arr) 
{
    let countPoorGrade = Number(arr[0]);
    let currentProblem = arr[1];
    let poorGrade = 0;
    let currentGrade = Number(arr[2]);
    let index = 1;
    let sum = 0;
    let problemCount = 0;

    while (currentProblem !== 'Enough'){
        sum += currentGrade;
        problemCount ++
        if (currentGrade <= 4){
            poorGrade++
        }
        if (poorGrade === countPoorGrade){
            console.log(`You need a break, ${poorGrade} poor grades.`);
                break;
        }
        index += 2;
        currentProblem = arr[index];
        currentGrade = Number(arr[index + 1]);
    }
    let average = sum / problemCount;
    if (poorGrade !== countPoorGrade){
        console.log(`Average score: ${average.toFixed(2)}`);
        console.log(`Number of problems: ${problemCount}`);
        console.log(`Last problem: ${arr[index - 2]}`);
    }
    
}