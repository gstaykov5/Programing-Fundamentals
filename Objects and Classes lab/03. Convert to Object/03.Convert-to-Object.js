function solve(names) {
    let person = JSON.parse(names)

    for (const key in person) {
        console.log(`${key}: ${person[key]}`);
    }
    
}