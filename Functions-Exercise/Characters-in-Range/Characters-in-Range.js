function solve(a, b) {
    let startVal = a.charCodeAt(0);
    let endVal = b.charCodeAt(0);

    if(startVal > endVal){
        let temp = startVal;
        startVal = endVal;
        endVal = temp;
    }

    let res = '';
    for (let i = startVal + 1; i < endVal; i++) {
        res += (String.fromCharCode(i) + ' ');
        
    }

    console.log(res)
}  