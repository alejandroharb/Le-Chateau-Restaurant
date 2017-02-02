var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var PORT = 5000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//DATA=================
var reservation = [{
         name: "James",
         phoneNumber: "512-111-2234",
         email: "jdalton@guess.com",
         id: "jdalton",
    },
    {
         name: "Alex",
         phoneNumber: "713-555-7777",
         email: "alex@guessagain.com",
         id: "aharb",
    },
    {
         name: "Angus",
         phoneNumber: "713-444-1234",
         email: "aogubuike@guessagain.com",
         id: "aogubuike",
    }];

var waitList = [{
         name: "Jorge",
         phoneNumber: "512-000-8888",
         email: "jwong@dunno.com",
         id: "jwong",
    },
    {
         name: "Michael",
         phoneNumber: "713-888-2222",
         email: "mrogers@hereIam.com",
         id: "mrogers",
    }];


//GET requests
app.get('/',function(req,res) {
    res.sendFile(path.join(__dirname,'home.html'))
});


app.get('/reserve', function(req, res) {
    res.sendFile(path.join(__dirname, 'reserve.html'))
});

app.get('/table', function(req, res) {
    res.json([reservation,waitList]);
});

//POST request
app.post('/reservation-request', function(req, res) {
    var newCustomer = req.body;
    if(reservation.length >= 3) {
        console.log('we\'re on a waitlist,');
        waitList.push(newCustomer);
    } else {
        console.log('We\'ve got a table for you');
        reservation.push(newCustomer);
    }
});









// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
