var express = require('express');
var router = express.Router();

// middleware specific to this router
// router.use(function timeLog(req, res, next) {
//   console.log('Time: ', Date.now());
//   next();
// });
// define the home page route
router.get('/', function(req, res) {
  res.send('Game should be served from here');
});
// define the about route
// router.get('/about', function(req, res) {
//   res.send('About birds');
// });

module.exports = router;
