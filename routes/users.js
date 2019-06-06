var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Hey it me from express');
	console.log(res);
});

module.exports = router;
