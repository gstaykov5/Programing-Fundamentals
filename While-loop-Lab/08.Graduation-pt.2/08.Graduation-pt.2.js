function solve(input) 
{
    let name = input[0];
    let index = 1;
    let clas = 0;
    let average = 0;
    let grade = Number(input[1]);
    let next = false;
    let fail = false;

    while(index < input.length){
        if (grade >= 4){
            clas++;
            average += grade;
            next = true;
        } else {
            clas++;
            fail = true;
            break;
        }
        index++;
        grade = Number(input[index]);
    }
    average /= 12;

    if (fail){
        console.log(`${name} has been excluded at ${clas} grade`)
    } else {
        console.log(`${name} graduated. Average grade: ${average.toFixed(2)}`)
    }
}