function solve(array) {
    let first = Number(array.shift());
    let second = Number(array.shift());
    let third = Number(array.shift());
    let students = Number(array.shift());
    let employees = first + second + third;
    let answerPerHour = 0;
    let hour = 0;

    while (answerPerHour < students) {
        hour++;
        answerPerHour += employees;

        if (hour === 3) {
            hour++
        }
        if (hour === 9) {
            hour++
        }
    }
    return `Time needed: ${hour}h.`
}