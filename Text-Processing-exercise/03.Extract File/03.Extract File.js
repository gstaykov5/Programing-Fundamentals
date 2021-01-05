function solve(word, sentence) {
    let arr = word.split('\\');
    let words = arr.pop();
    let splited = words.split('.');

    splited.length > 2 ?
        console.log(`File name: ${splited[0]}.${splited[1]}\nFile extension: ${splited[2]}`) :
        console.log(`File name: ${splited[0]}\nFile extension: ${splited[1]}`);

};