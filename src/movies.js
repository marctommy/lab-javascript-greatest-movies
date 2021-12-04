// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)? //

function getAllDirectors(movies) {
  const listOfAllDirectors = movies.map((movie) => movie.director);
  return listOfAllDirectors;
} // map
// we have an array of movie objects
// the first challenge is to get an array of all the director names // we need to loop somehow over all the movies, get the director name strings from movies // we also want one of each directors name once and not multiple times //

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
  const spielbergMovies = movies.filter(
    (movie) => movie.director === 'Steven Spielberg'
  );

  const dramaMovies = spielbergMovies.filter((movie) =>
    movie.genre.includes('Drama')
  );

  return dramaMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length === 0) {
    return 0;
  }
  const moviesWithScores = movies.filter((movie) => movie.score);
  const allScores = moviesWithScores.map((movie) => movie.score);

  // allScores.forEach((score) => total + score);
  // return total / movies.length;
  const totalOfAllScores = allScores.reduce(
    (accumulator, current) => accumulator + current,
    0
  );
  const average = totalOfAllScores / allScores.length;
  return Number(average.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore() {}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear() {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}
