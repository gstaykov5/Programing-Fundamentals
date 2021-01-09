function solve(array, array1) {
    array.forEach(element => {
        array1.forEach(element1 => {
            if (element === element1) {
                console.log(element);
            }
        });
    });
}