/**
 * Created by avpetro1 on 13.07.2015.
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('forma4DBv2', { title: '4DBv2' });
});

module.exports = router;