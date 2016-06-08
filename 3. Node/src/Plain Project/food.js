module.exports = {};

function giveFood() {
    printFood('Snickers');
}

function printFood(foodType) {
    console.log('This is ' + foodType);
}

module.exports.food = giveFood;
