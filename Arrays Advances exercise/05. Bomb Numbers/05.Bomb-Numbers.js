function solve(array = [], bomb = []) {
    let mineField = array.slice(0);
    
    while (mineField.includes(bomb[0])) {
        let bombIndex = mineField.indexOf(bomb[0]);
        let startIndex = Math.max(bombIndex - bomb[1], 0);
        mineField.splice(bombIndex, bomb[1] + 1);
        mineField.splice(startIndex, bomb[1])
    }
    return mineField.reduce((a, c) => a + c, 0);
}