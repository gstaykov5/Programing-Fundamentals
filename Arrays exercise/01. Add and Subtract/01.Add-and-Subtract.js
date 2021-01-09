function solve(array) {
    let newArray = [];
    let newArraySum = 0;
    let oldArraySum = 0;

    array.forEach((element, index) => {
        oldArraySum += element;
        if (element % 2 === 0) {
            newArray.push(element + index);
            newArraySum += element + index;
        } else if (element % 2 !== 0) {
            newArray.push(element - index);
            newArraySum += element - index;
        }
    });

    console.log(newArray);
    console.log(oldArraySum);
    console.log(newArraySum);
}