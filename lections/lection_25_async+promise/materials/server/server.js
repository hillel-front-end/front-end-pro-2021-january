var express = require('express');
var fs = require('fs');
var app = express(); 
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/json'}));

app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
	res.setHeader('Access-Control-Allow-Credentials', true);
	next();
});

const port = 3005;
 
app.listen(port, function () { // говорим на каком порту запускать нашу  NODE_JS  программу.
    console.log(`Example app listening on port http://localhost:${port}/`);
});


app.get('/foo', function(req, res) {
	setTimeout(() => {
		res
		  .status(200)
		  .send('123');
	  }, 1000)
});

function getId() {
	return {id: 'ac12112f12f12'};
}

app.get('/login', function(req, res) {
	// setTimeout(() => {
	  res
		.status(200)
		.json(getId());
	// }, 3000)
});




app.get('/auth', function(req, res) {
	setTimeout(() => {
		res
		.status(200)
		.send({success: false});
	}, 15000);
});


app.get('/google-auth', function(req, res) {
	res
	.status(200)
	.send({success: true});
});

function getUsers() {
	return [
		{name: 'Valera', desc: 'aaaaaa', age: 10}, 
		{name: 'Sasha', desc: 'bbbbb',  age: 18}, 
		{name: 'Andrey', desc: 'ccccc',  age: 20},
		{name: 'Andrey', desc: 'ccccc',  age: 20}
	]
}

app.get('/candidates', function(req, res) {
	res
	.status(200)
	.send(getUsers());
});