function solve(a) {
    a = String(a);
    let even = 0;
    let odd = 0;

    
    for (const i of a) {
        i % 2 === 0 ? 
        even += Number(i) : 
        odd += Number(i)
    }
    
    console.log(`Odd sum = ${odd}, Even sum = ${even}`);


}