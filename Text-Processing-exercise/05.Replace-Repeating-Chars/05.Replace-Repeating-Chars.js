function solve(word, text) {
    let cut = '';
    let chch = '';

    for (const ch of word) {
        if(chch !== ch) {
            chch = ch;
            cut += ch;
        }    
    }
    return cut
};