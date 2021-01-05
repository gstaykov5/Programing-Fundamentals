function solve(text, word) {
    let array = text.split(' ');
    let counter = 0;
    
    while (array.includes(word)) {
        array = array.join(' ');
        array = array.replace(`${' ' +word+ ' '}`, '');
        array = array.split(' ')
        counter++
    }
    console.log(counter);
    
}