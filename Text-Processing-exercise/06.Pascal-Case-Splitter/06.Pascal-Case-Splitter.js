function solve(word, text) {
    let splited = '';
    for (const words of word) {
        let char = words.charCodeAt()
        if (char >= 65 && char <= 90) {
            splited +=' ' + words;
        } else {
            splited += words;
        }
    }
    splited = splited.trim()
    splited = splited.split(' ').join(', ');
    return splited;
}