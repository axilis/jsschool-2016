var http = require('http');

console.log('Ovo radi!');

var food = require('./food');
food.food();

var car = require('./car');

console.log(car.audi);
console.log(car.renault());

require('./People/stef');
require('./People/stefica');

http.createServer(onRequest).listen(1337);
console.log('server je pokrenut');

function onRequest(req, res) {
    console.log(req.url);
    res.writeHead(200, {'Context-Type': 'text/plain'});
    res.write('{<h1>Ovo je html</h1>}');
    res.end();
}

for (var i = 0; i < 5; i++) {
    order(i);
}

function order(orderNo) {
    console.log('Ordered: ' + orderNo);
    cook(function() {
        console.log('dinner is done: ' + orderNo);
    });
}

function cook(callback) {
    setTimeout(function() {
        callback();
    }, 3000);
}
