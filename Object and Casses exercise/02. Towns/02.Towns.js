function solve(array) {

    for (let i = 0; i < array.length; i++) {
        let city = array[i].split(' | ');
        let town = city[0];
        let latitude = Number(city[1]).toFixed(2);
        let longitude = Number(city[2]).toFixed(2);
        let obj = {
            town: town,
            latitude: latitude,
            longitude: longitude
        };
        console.log(obj);
    }
}