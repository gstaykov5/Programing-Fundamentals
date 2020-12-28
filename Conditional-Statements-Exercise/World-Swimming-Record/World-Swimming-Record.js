function solve(record, distanceInMeters, secondsPerMeter) {
    record = Number(record);
    distanceInMeters = Number(distanceInMeters);
    secondsPerMeter = Number(secondsPerMeter);
    
    let time = distanceInMeters * secondsPerMeter;
    let delay = Math.floor(distanceInMeters / 15);
    let delayTime = delay * 12.5;

    time = time + delayTime;

    if (time < record) {
        console.log(`Yes, he succeeded! The new world record is ${time.toFixed(2)} seconds.`)
    } else {
        let lessTime = time - record;
        console.log(`No, he failed! He was ${lessTime.toFixed(2)} seconds slower.`)
    }
    
}