function solve(input) 
{
    let searchingBook = input[0];
    let current = input[1];
    let index = 1;
    let isFound = false;
    

    while (current !== 'No More Books'){
        
        if (current === searchingBook){
            isFound = true;
            console.log(`You checked ${index - 1} books and found it.`);
            break;
        } else {
            index++
            current = input[index]
        }
    }

    if(!isFound){
        console.log('The book you search is not here!');
        console.log(`You checked ${index - 1} books.`)
    }
    
}