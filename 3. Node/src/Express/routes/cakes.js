var express = require('express');
var router = express.Router();
var Cake = require('../models/cake');

router.post('/', function(req, res, next) {
    console.log(req.body);
    if (!req.body.name || !req.body.time) {
        res.status(400).send("Bad request");
        return;
    }
    var newCake = new Cake();
    newCake.name = req.body.name;
    newCake.time = req.body.time;
    newCake.save(function(err) {
        if (err) {
            console.log('dogodio se problem');
        }
    });
    res.status(200).send('New cake added');
});

router.get('/', function(req, res, next) {
    if (!req.query.id) {
        res.status(400).send('Bad Request!');
        return;
    }
    Cake.findOne({ _id: req.query.id }).then(function(cake) {
        if (!cake) {
            res.status(404).send('Not Found');
            return;
        }
        res.json(cake);
    }, function(err) {
        console.log(err);
        res.status(404).send('Not Found');
    });
});

module.exports = router;
