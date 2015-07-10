var express = require('express');
var app = express();
var main = require('./app/controllers/main');

// Use static files
app.use(express.static('public'));

// Routes
app.use('/', main);

// Handle 404
// app.use(function(req, res, next) {
//   res.status(404).send('Sorry cant find that!');
// });

var server = app.listen( process.env.PORT || 3000, function () {
  // var host = server.address().address;
  // var port = server.address().port;
  //
  // console.log('Example app listening at http://%s:%s', host, port);
});
