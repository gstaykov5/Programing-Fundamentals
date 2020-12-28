function solve(month, nights) 
{
    nights = Number(nights);
    //budget = Number(budget);

    let priceStudio = 0;
    let priceApartment = 0;

    if (month === 'May' || month === 'October'){
        priceStudio = nights * 50;
        priceApartment = nights * 65;

        if (nights > 7 && nights < 14) {
            priceStudio *= 0.95
        } else if (nights > 14) {
            priceStudio *= 0.7
            priceApartment *= 0.9
        }
    } 
    else if (month === 'June' || month === 'September'){
        priceStudio = nights * 75.2;
        priceApartment = nights * 68.7;

        if (nights > 14) {
            priceStudio *= 0.8 
            priceApartment *= 0.9 
        }
    }
    else if (month === 'July' || month === 'August'){
        priceStudio = nights * 76;
        priceApartment = nights * 77;
        
        if (nights > 14) {
            //priceStudio = priceStudio - (nights * (76 * 0.2));
            priceApartment *= 0.9
        }
    }
    console.log(`Apartment: ${priceApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${priceStudio.toFixed(2)} lv.`)

}