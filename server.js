var express = require('express');
var app = express();

var PORT = process.env.PORT || 8080;

app.get('/', function (req, res) {
  res.send({
    {
      lat: 48.3582,
      long: 10.9067
    },
    {
      lat: 48.3564,
      long: 10.8971
      }
    }
  ]);
});

app.post('/change', function(req, res) {
  // Properties sent with query (e.g. url params)
  console.log('Query', req.query);
  
  // Properties sent with body (=payload)
  console.log('Body', req.body);
});


app.listen(PORT, function () {
  console.log('App listening on port 8080!');
});

