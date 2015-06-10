var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('forma4DB', { title: '4DB' });
});

module.exports = router;


