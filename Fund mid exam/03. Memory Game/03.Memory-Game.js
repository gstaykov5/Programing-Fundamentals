function solve(array) {
    let sequence = array.shift().split(' ');
    let addEleCounter = 0;
    let counter = 0;

    for (let i = 0; i < array.length; i++) {
        let [first, second] = array[i].split(' ');
        first = Number(first);
        second = Number(second);
        counter++;

        if (first >= 0 && second >= 0) {
            let firstSequence = sequence.slice(first, first + 1).toString();
            let secondSequence = sequence.slice(second, second + 1).toString();

            if (firstSequence == secondSequence) {
                if (second > first) {
                    sequence.splice(second, 1);
                    sequence.splice(first, 1);
                } else {
                    sequence.splice(first, 1);
                    sequence.splice(second, 1);
                }
                console.log(`Congrats! You have found matching elements - ${firstSequence}!`);

            } else {
                console.log('Try again!');
            }

        } else if (first < 0 || second < 0) {
            console.log('Invalid input! Adding additional elements to the board');
            addEleCounter++;
            let findingMiddle = parseInt((sequence.length - 1) / 2);
            let addingElement = `-${i + 1}a`
            sequence.splice(findingMiddle + 1, 0, addingElement);
            sequence.splice(findingMiddle + 1, 0, addingElement);
        }

        if (sequence.length === 0) {
            console.log(`You have won in ${counter} turns!`);
            break;
        }

    }

    if (sequence.length !== 0) {
        console.log('Sorry you lose :(');
        return sequence.join(' ')
    }
}