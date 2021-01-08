function solve(array) {
    let dict = []

    class Difinition {
        constructor(key, value) {
            this.Term = key;
            this.Definition = value;
        }
    }

    for (const line of array) {
        let newLine = JSON.parse(line);

        for (const [key, value] of Object.entries(newLine)) {
            let tempList = [new Difinition(key, value)];

            let missTerm = dict.find(obj => obj.Term === key);

            if (missTerm === undefined) {
                dict.push(new Difinition(key, value))
            } else {
                dict = dict.map(product => tempList.find(temp => temp.Term === product.Term) || product);
            }

        }
    }
    dict.sort(function (a, b) {
        return a.Term.localeCompare(b.Term);
    });
    dict.forEach(obj => {
        return console.log(`Term: ${obj.Term} => Definition: ${obj.Definition}`)
    })
}