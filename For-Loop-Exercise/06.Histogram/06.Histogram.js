function solve(input) 
{
    let count = Number(input[0]);
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for (let i = 1; i < input.length; i++){
        let num = Number(input[i]);

        if (num < 200){
            p1++
        } else if (num < 400){
            p2++
        } else if (num < 600){
            p3++
        } else if (num < 800){
            p4++
        } else {
            p5++
        }
    }
    console.log(`${(p1 / count * 100).toFixed(2)}%`);
    console.log(`${(p2 / count * 100).toFixed(2)}%`);
    console.log(`${(p3 / count * 100).toFixed(2)}%`);
    console.log(`${(p4 / count * 100).toFixed(2)}%`);
    console.log(`${(p5 / count * 100).toFixed(2)}%`);
    ;
}