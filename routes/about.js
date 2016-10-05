var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
	  title: 'About me',
	  content: 'I am a student at Georgian College, currently in my 3rd term.'
	});
});

module.exports = router;
