var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var bla = 2;
    console.log('Pozdrav sa servera');
  res.render('index', { title: 'Express',
bla: bla,
list: ['Prvi', 'Drugi', 'Treci'] });
});

module.exports = router;
