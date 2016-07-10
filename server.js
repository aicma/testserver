var express = require('express');
var app = express();

var PORT = process.env.PORT || 8080;

var events = [
    {
      id: 0,
      name: "Zugspitz Ultratrail",
      date: new Date("2016-06-23"),
      img: "",
      numberformat: "^\\d{4}$"
    },
    {
      id: 1,
      name: "Rad am Ring",
      date: new Date("2016-07-23"),
      img: "",
      numberformat: "^[A-B]{1}\\s*\\d{1,4}$"
    },
    {
      id: 2,
      name: "TestEvent",
      date: new Date("2016-02-23"),
      img: "",
      numberformat: "^\\d{1,4}\\s*[A-B]$"  
    },
    {
      id: 3245,
      name: "tour de Innsbruck",
      date: new Date("2016-06-23"),
      img: "",
      numberformat: "^[A-B]{1}\\s*\\d{1,4}$"
    },
    {
      id: 7357,
      name: "Augsburg Halbmarathon",
      date: new Date("2016-07-02"),
      img: "",
      numberformat: "^[A-Z]{1}\\s*\\d{1,4}$"
    }
];

app.get('/cameras', function (req, res) {
  var eventID = req.query.id;
  //console.log(eventID +', '+ req.query.id);
  res.set({
  'Content-Type': 'application/json',
  'Cache-Control': 'max-age=3600'
})
  switch (parseInt(eventID, 10)) {
    case 0:
      res.status(200).send({
          1: {
            lat: 48.3582,
            long: 10.9067
          },
          2: {
            lat: 48.356349,
            long: 10.896281
          }
      });
      break;
    case 1:
      res.status(200).send({
          1: {
            lat: 48.3582,
            long: 10.9067
          },
          2: {
            lat: 48.356,
            long: 10.897
          }
        });
      break;
    case 2:
      res.status(200).send({
          1: {
            lat: 48.3582,
            long: 10.9067
          },
          2: {
            lat: 48.356,
            long: 10.897
          }
      });
      break;
    case 3245:
      res.status(200).send({
          1: {
            lat: 48.3582,
            long: 10.9067
          },
          2: {
            lat: 48.356,
            long: 10.897
          }
      });
      break;
    case 7357:
      res.status(200).send({
          1: {
            lat: 48.345744, 
            long: 10.924400
          },
          2: {
            lat: 48.344322, 
            long: 10.936389
          },
          3:{
            lat: 48.413699, 
            long: 10.889720
          },
          4:{
            lat: 48.375427, 
            long: 10.877972
          },
          5:{
            lat: 48.359803, 
            long: 10.883200
          }
      });
    default:
        res.status(404).send('ERROR - EventID not registered'); //technically should not happen         
  }
});

app.get('/events', function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.status(200).send(events);
});

app.post('/rider', function(req, res) {
  var jsonString = '';

  req.on('data', function (data) {
    jsonString += data;
  });

  req.on('end', function () {
    console.log(JSON.parse(jsonString));

    res.status(200).send('ok');

  });
});


app.listen(PORT, function () {
  console.log('App listening on port 8080!');
});

