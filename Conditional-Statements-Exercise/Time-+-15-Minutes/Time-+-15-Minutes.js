function solve(hours, minutes) {
    hours = Number(hours);
    minutes = Number(minutes);
    let plusMinutes = hours * 60 + minutes + 15;
    
    let finalHours = Math.floor(plusMinutes / 60);
    let finalMinutes = plusMinutes % 60;
    
    if (finalHours > 23) {
        finalHours=0;
    }
    if (finalMinutes < 10) {
        console.log(`${finalHours}:0${finalMinutes}`);
    } else {
        console.log(`${finalHours}:${finalMinutes}`)
    }

}