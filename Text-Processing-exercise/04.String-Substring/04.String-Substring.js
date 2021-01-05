function solve(word, text) {
    text = text.toLowerCase();
    let arr = text.split(' ');
    arr.includes(word) ? console.log(word) : console.log(`${word} not found!`);

    

};