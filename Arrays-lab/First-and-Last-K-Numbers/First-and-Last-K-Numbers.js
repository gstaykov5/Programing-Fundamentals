function solve(array = []) {
    const counter = array[0];
    // let newArrey = array.slice(1);
    
    for (let i = 1; i <= 2; i++) {
        let result = '';
        let newArrey = array.slice(i);

        if(counter === 1) {
            let x = array[1]
            console.log(x);
            console.log(x);
            break;
        }       

        for (let z = 0; z < counter ; z++) {
            const element = newArrey[z];
            result += element + ' ';
            
        }
        console.log(result);
    }
     
}