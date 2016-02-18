var express = require('express');
var router = express.Router();

var settings = require('../settings');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: settings.title });
});

module.exports = router;
