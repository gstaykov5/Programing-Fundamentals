function solve(word, sentence) {
    let array = word.split(' ');
    
    array.forEach(element => {
        if (element.includes('#') && element.length > 1) {
            let asd = element.slice(1);
            console.log(asd);
        }
    });
};