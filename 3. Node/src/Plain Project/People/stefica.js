var movies = require('../movies');
var locations = require('../locations');
console.log('Stefica voli ' + movies.favMovie);
var steficasLocation = locations();
steficasLocation.favLocation = 'Brijuni';
console.log(steficasLocation);
