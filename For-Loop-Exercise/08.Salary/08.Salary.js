function solve(input) 
{
    let salary = Number(input[1]);

    for (let i = 2; i < input.length; i++){
        let web = input[i];

        if (web === 'Facebook'){
            salary -= 150;
        } else if (web === 'Instagram'){
            salary -= 100;
        } else if (web === 'Reddit'){
            salary -= 50
        }
    }
    if (salary <= 0){
        console.log('You have lost your salary.');
    } else {
        console.log(`${salary}`)
    }
}