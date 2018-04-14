var express = require('express');
var router = express.Router();
global.config = require('../config/config.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("ok");
});

module.exports = router;
