function solve(a, b, c) {
    a = Number(a);
    b = Number(b);
    c = Number(c);
    
    let totalTime = a + b + c;
    let minets = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;

    if (seconds < 10) {
        console.log(`${minets}:0${seconds}`);
    } else {
        console.log(`${minets}:${seconds}`);
    }
}