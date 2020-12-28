function solve(count, listPerHour, days) {
    count = Number(count);
    listPerHour = Number(listPerHour);
    days = Number(days);

    let totalTime = count / listPerHour;
    let totalHours = totalTime / days;
    console.log(totalHours);
    
}