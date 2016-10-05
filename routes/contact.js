var express = require('express');
var router = express.Router();

var phonenum = '(705)543-1071';
var email = 'issacohara@gmail.com';
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact', {
	  title: 'Contact Me',
	  phone: phonenum,
	  address: email
	});
});

module.exports = router;
