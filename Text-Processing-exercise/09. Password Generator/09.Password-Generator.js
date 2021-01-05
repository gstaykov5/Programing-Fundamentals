function solve(array) {
    let concat = '';
    let mixed = '';
    for (let i = 0; i < array.length - 1; i++) {
        const element = array[i];
        concat += element;
        mixed = array[2];
    }

    mixed = mixed.toUpperCase();

    for (const word of concat) {
        if (word === 'a' || 
            word === 'e' || 
            word === 'i' || 
            word === 'o' || 
            word === 'u') {
            concat = concat.replace(word, '-')
        }
    }

    while (concat.includes('-')) {
        for (const word of mixed) {
            concat = concat.replace('-', word)
        }
    }

    concat = concat.split('').reverse().join('');

    console.log(`Your generated password is ${concat}`);
}