function fruitShop(fruit, day, quantity) {
 
    quantity = Number(quantity);
 
    let dday = "";
 
    let result = 0;
 
    if (day === "Monday" || day === "Tuesday" || day === "Wednesday" ||
        day === "Thursday" || day === "Friday") {
        dday = "Work Day";
    } else if (day === "Saturday" || day === "Sunday") {
        dday = "Off Day";
    }
 
 
    switch (dday) {
        case "Work Day":
            switch (fruit) {
                case "banana": result = quantity * 2.50; break;
                case "apple": result = quantity * 1.20; break;
                case "orange": result = quantity * 0.85; break;
                case "grapefruit": result = quantity * 1.45; break;
                case "kiwi": result = quantity * 2.70; break;
                case "pineapple": result = quantity * 5.50; break;
                case "grapes": result = quantity * 3.85; break;
               
 
            } break;
 
 
        case "Off Day":
 
            switch (fruit) {
                case "banana": result = quantity * 2.70; break;
                case "apple": result = quantity * 1.25; break;
                case "orange": result = quantity * 0.90; break;
                case "grapefruit": result = quantity * 1.60; break;
                case "kiwi": result = quantity * 3.00; break;
                case "pineapple": result = quantity * 5.60; break;
                case "grapes": result = quantity * 4.20; break;
               
 
            } break;
 
    }
 
    if (result === 0) {
        console.log("error")
    }
    else {
        console.log(result.toFixed(2));
    }
 
 
   
 
}