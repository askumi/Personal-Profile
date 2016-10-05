var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
	  title: 'Services I offer',
	  content: 'I offer java programming services for $9000 per hour. See my contact page to contact me'
	});
});

module.exports = router;
