function solve(array) {
    const words = array.shift().split(' ');
    let sentence = {};

    words.forEach(word => {
        sentence[word] = 0;
    });

    for (const word of array) {
        if (sentence.hasOwnProperty(word)) {
            sentence[word]++
        }
    }

    Object.keys(sentence)
        .sort((a, b) => sentence[b] - sentence[a])
        .forEach(ele => console.log(`${ele} - ${sentence[ele]}`))

}