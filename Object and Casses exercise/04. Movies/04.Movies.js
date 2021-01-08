function solve(array) {
    let finalList = [];

    for (const iterator of array) {

        if (iterator.includes('addMovie')) {
            let temporaryList = {};
            let movie = iterator.replace('addMovie', '').trim();
            temporaryList.name = movie;
            finalList.push(temporaryList);
        } else if (iterator.includes('directedBy')) {
            let [movieName, directorName] = iterator.split(' directedBy ');
            let myMovie = finalList.find(m => m.name === movieName);
            if (myMovie) {
                myMovie.director = directorName;
            }
        } else {
            let [movieName, movieDate] = iterator.split(' onDate ');
            let myMovie = finalList.find(m => m.name === movieName);
            if (myMovie) {
                myMovie.date = movieDate;
            }
        }


    }
    finalList.forEach(movie => {
        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie));
        }
    });

}