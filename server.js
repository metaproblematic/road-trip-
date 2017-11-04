

var express = require('express')

var app = express()

app.use(express.static(__dirname + '/css'))


app.get('/', function(req, res) {
	res.sendFile(__dirname + '/html/home.html')
})

app.get('/boston', function(req, res) {
	res.sendFile(__dirname + '/html/boston.html')
})

app.get('/nyc', function(req, res) {
	res.sendFile(__dirname + '/html/nyc.html')
})

app.get('/stl', function(req, res) {
	res.sendFile(__dirname + '/html/stl.html')
})

app.get('/boulder', function(req, res) {
	res.sendFile(__dirname + '/html/boulder.html')
})

app.get('/sf', function(req, res) {
	res.sendFile(__dirname + '/html/sf.html')
})



app.listen(8080, function() {
	console.log("listening on 8080")
})

