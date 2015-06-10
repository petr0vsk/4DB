var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('forma2DB5DB', { title: '2DB5DB' });
});

module.exports = router;
