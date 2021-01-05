function solve(array = []) {
    let firstArray = Math.max(...array[0]);
    let save = 0;

    for (let i = 0; i < array.length; i++) {
        const element = Math.max(...array[i]);

        if (element >= firstArray) {
            save = element;
        }
        firstArray = element;

        
    }
    console.log(save);
}
expected 'New employee is hired. Name: {username}. Position: {position}' 
to equal 'New employee is hired. Name: Stanimir. Position: engineer'