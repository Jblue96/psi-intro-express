var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();





      var songData = [
        {name: 'shake it off'},
        {name: 'what is going on'}
      ];




// middle ware that makes the files
// in the public folder visible
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/song', function(req, res) {
  console.log('in get song route');
  // all the work
  res.send(songData);
});

app.post('/song', function(req, res) {
  console.log('in post route');
  console.log('req.body ->', req.body);
  songData.push(req.body);
  res.sendStatus(201);
});

// tells our server to listen on 5000
app.listen(5000, function() {
  console.log('listening on port 5000');
});

// console.log('HEY CLASS!');
