function solve(words, sentence) {
    words = words.split(', ').sort((a, b) => { return b.length - a.length });
    sentence = sentence.split(' ');
    
    for (const word of words) {
        const length = word.length;

        for (let i = 0; i < sentence.length; i++) {
            const element = sentence[i];
            const elLength = element.length;

            if (length === elLength && element.includes('*')) {
                sentence.splice(i, 1, word);
                break;
            }
        }        
    }

    return sentence.join(' ')
};