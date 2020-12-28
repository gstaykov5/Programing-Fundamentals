function solve(animals) {
    switch (animals) {
        case 'dog':
            console.log('mammal');
            break;
        case 'crocodile':
        case 'tortoise':
        case 'snake':
            console.log('reptile');
            break;
    default:
        console.log('unknown');
        break;                    
    }

}