function solve(load) {
    let loading = load / 10;
    let percentage = '%';
    let dot = '.';
    let result = [];
    let resultPer
    let resultDot
    resultPer = percentage.repeat(loading);
    resultDot = dot.repeat(10 - loading);
    result.push(resultPer + resultDot);
    
    
    if (load < 100) {
        console.log(`${load}% [${result}]`);
        console.log(`Still loading...`);
    } else {
        console.log(`100% Complate!`);
        console.log(`[${result}]`)
    }

} 