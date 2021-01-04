function solve(n, k) {
    let length = Number(n);
    let following = Number(k);
    let totalArrey = [1, 1, 2];

    for (let i = 3; i < length; i++) {
        let currentArrey = [...totalArrey];
        let sum = 0;
        for (let j = 0; j < following; j++) {
            sum += currentArrey.pop();

            if (currentArrey.length === 0) {
                break;
            }
        }
        totalArrey.push(sum);
    }

    let arrey = totalArrey.join(' ');
    
    console.log(arrey);
}