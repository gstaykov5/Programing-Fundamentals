function solve(word, text) {
    let length = word.length / 2;
    let first = word.substring(0, length)
    let second = word.substring(length)

    first = first.split('').reverse().join('');
    second = second.split('').reverse().join('');
    console.log(first);
    console.log(second);
    
}