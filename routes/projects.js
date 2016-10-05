var express = require('express');
var router = express.Router();


var projects = ['A 2d top-down java RPG', 'A c* Pathfinding Algorytm', 'A website using real world QR-Codes as punch-cards']
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('projects', {
	  title: 'Project History',
	  content: projects
	});
});

module.exports = router;
