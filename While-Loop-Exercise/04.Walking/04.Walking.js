function solve(input) 
{
    const goal = 10000;
    let steps = 0;
    let currentSteps = input[0];
    let index = 0;

    while (steps < goal){
        if (currentSteps == 'Going home'){
            steps += Number(input[index + 1]);
            if (steps >= goal){
                console.log(`Goal reached! Good job!`);
                steps -= goal;
                console.log(`${steps} steps over the goal!`);
                break;
            } else {
                steps -= goal
                console.log(`${Math.abs(steps)} more steps to reach goal.`);
            }
        }

        steps += Number(currentSteps);
        if (steps >= goal){
            console.log(`Goal reached! Good job!`);
            steps -= goal;
            console.log(`${steps} steps over the goal!`);
            break;
        } 
        
        index++
        currentSteps = input[index];
    }

}