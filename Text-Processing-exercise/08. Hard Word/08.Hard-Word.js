function solve(input, key) {
    let template = input[0]
    let words = input[1].sort((a, b) => b.length - a.length);

    words.forEach(word => {
        template = template.replace('_'.repeat(word.length), word)
    });
    return template
}