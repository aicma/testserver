var express = require('express');
var app = express();

var PORT = process.env.PORT || 8080;

app.get('/', function (req, res) {
  res.send({
    1: {
      lat: 48.3582,
      long: 10.9067
    },
    2: {
      lat: 48.356,
      long: 10.897
      }
    }
  );
});

app.post('/', function(req, res) {
  var jsonString = '';

  req.on('data', function (data) {
    jsonString += data;
  });

  req.on('end', function () {
    console.log(JSON.parse(jsonString));
    res.send(JSON.parse(jsonString));

  });
/*
  res.send('post request received');
  req.on('end',function(data){
  // Properties sent with query (e.g. url params)
    console.log('Query', req.query);
  // Properties sent with body (=payload)
    console.log('Body', req.body);
  })
*/
});


app.listen(PORT, function () {
  console.log('App listening on port 8080!');
});

