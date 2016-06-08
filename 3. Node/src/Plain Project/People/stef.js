var movies = require('../movies');
var locations = require('../locations');
movies.favMovie = 'Matrix';
console.log('Stef voli ' + movies.favMovie);
var stefsLocation = locations();
console.log(stefsLocation);
