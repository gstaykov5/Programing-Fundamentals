function solve(n) {
    let result = 0;
    function divisor(n) {
        let isValid = true;
        if (n % 2 === 0) {
            while (n !== 1) {
                n = Math.ceil(n / 2);
                for (let i = 0; i < 1; i++){
                    result += n;
                    }
                }
        } else {
            isValid = false;
        }
        return isValid;
    }
    
    let divisorVal = divisor(n);
    if (divisorVal && result === n) {
        console.log(`We have a perfect number!`);
    } else {
        console.log(`It's not so perfect.`)
    }
} 