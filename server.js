'use strict';
var express = require('express');
var app = express();

var path = require('path');
var indexHtmlPath = path.join(__dirname, '/browser/index.html');

// Serve up files
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/browser', express.static(__dirname + '/browser'));


// Set up router
app.get('/', function(req,res,next){
	res.sendFile(indexHtmlPath);
})

// Make server start listening
var port = 8080;
app.listen(port, function(err) {
	if(err){
		throw err;
	}else{	
		console.log('Journey server is up. Listening on port: ', port);
	}
})
