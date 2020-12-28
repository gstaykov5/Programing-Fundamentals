function solve(n1, n2, mark) 
{
    n1 = Number(n1);
    n2 = Number(n2);

    let total = '';
    let evenOrOdd = 'odd'

    if (mark === '+'){
        total = n1 + n2;
        if (total % 2 === 0){
            evenOrOdd = 'even'
        }
        console.log(`${n1} ${mark} ${n2} = ${total} - ${evenOrOdd}`);
    } else if (mark === '-'){
        total = n1 - n2;
        if (total % 2 === 0){
            evenOrOdd = 'even'
        }
        console.log(`${n1} ${mark} ${n2} = ${total} - ${evenOrOdd}`);
    } else if (mark === '*') {
        total = n1 * n2;
        if (total % 2 === 0){
            evenOrOdd = 'even'
        }
        console.log(`${n1} ${mark} ${n2} = ${total} - ${evenOrOdd}`);
    } else if (n2 === 0 && (mark === '/' || mark === '%')){
        console.log(`Cannot divide ${n1} by zero`)
    }  else if (mark === '/'){
        total = n1 / n2;
        console.log(`${n1} ${mark} ${n2} = ${total.toFixed(2)}`)
    } else if (mark === '%'){
        total = n1 % n2;
        console.log(`${n1} ${mark} ${n2} = ${total}`)
    }
    
    
    


}