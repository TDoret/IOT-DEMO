var express = require('express');
var app = express();
var port = process.env.port || 1337

app.get('/', function (req, res) {
    //res.send('Hello World!');
    res.render('index');

});

app.get('/demo1', function (req, res) {
    //res.send('Hello World!');
    res.render('demo1');

});

app.get('/demo2', function (req, res) {
    //res.send('Hello World!');
    res.render('demo2');

});

app.get('/textAnalytics', function (req, res) {
    res.send('welcome to textAnalyticsComponent');
});

var swig = require('swig');

// This is where all the magic happens!
app.engine('html', swig.renderFile);

app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.set('view cache', false);
swig.setDefaults({cache: false});


var server = app.listen(port, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});