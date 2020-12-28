function solve(h1,m1,h2,m2) 
{
    h1 = Number(h1);
    m1 = Number(m1);
    h2 = Number(h2);
    m2 = Number(m2);

    let examHour = (h1 * 60) + m1;
    let arriveHour = (h2 * 60) + m2;
    let totalHour = Math.abs(examHour - arriveHour);
    let hour = Math.floor(totalHour / 60);
    let min = (totalHour % 60);

    if (examHour > arriveHour ) {
        totalHour = examHour - arriveHour;
        if (totalHour >= 60 && min < 10){
            console.log('Early');
            console.log(`${hour}:0${min} hours before the start`);
        } else if (totalHour >= 60){
            console.log('Early');
            console.log(`${hour}:${min} hours before the start`);
        }else if (totalHour < 60 && min < 10){
            console.log('On time')
            console.log(`${min} minutes before the start`);
        } else if(totalHour <= 30){
            console.log('On time')
            console.log(`${min} minutes before the start`);
        } else {
            console.log('Early')
            console.log(`${min} minutes before the start`);
        }
    }

    else if (arriveHour > examHour){
        console.log('Late');
        totalHour = arriveHour - examHour;
        if (totalHour < 60 && min <= 10){
            console.log(`${min} minutes after the start`);
        }else if (totalHour <= 60){
            console.log(`${min} minutes after the start`);
        }else if (totalHour > 60 && min < 10){
            console.log(`${hour}:0${min} minutes after the start`);
        } else {
            console.log(`${hour}:${min} hours after the start`);
        }
        
    }

    else {
        console.log('On time')
    }

}