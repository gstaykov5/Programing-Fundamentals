function solve(array) {
    const finalScores = {};
    const types = {
        S: 4,
        H: 3,
        D: 2,
        C: 1
    }
    const powers = {
        J: 11,
        Q: 12,
        K: 13,
        A: 14,
    }

    array.forEach(person => {
        const splitedPerson = person.split(': ').join(':');
        let [name, cards] = splitedPerson.split(':');
        cards = cards.split(', ');

        cards.forEach(card => {
            if (!finalScores.hasOwnProperty(name)) {
                finalScores[name] = [card];

            } else {
                const personValue = Object.values(finalScores[name]);

                if (!personValue.includes(card)) {
                    finalScores[name].push(card);
                }

            };

        });
    });

    for (const key in finalScores) {
        const name = key;
        const score = finalScores[key];
        let totalPower = 0;

        score.forEach(ele => {
            const elements = ele.split('');
            let cardPower;
            let type;

            if (elements.length > 2) {
                cardPower = Number(elements[0] + elements[1]);
                type = elements[2];
            } else {
                cardPower = Number(elements[0]);
                type = elements[1];
            }

            if (!cardPower) {
                cardPower = elements[0];
                totalPower += powers[cardPower] * types[type];
            } else {
                totalPower += cardPower * types[type];
            }
        });
        console.log(`${name}: ${totalPower}`);

    };

};