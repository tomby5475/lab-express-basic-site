const express = require('express')
const app = express()
const port = 3003

console.log(__dirname + '/views/home.html');

app.use(express.static(__dirname + '/public'))

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/home.html')
})

app.get('/family', function (req, res) {
    res.sendFile(__dirname + '/views/family.html')
})

app.get('/films', function (req, res) {
    res.sendFile(__dirname + '/views/films.html')
})

app.get('/favBooks', function (req, res) {
    res.sendFile(__dirname + '/views/favBooks.html')
})

app.listen(port, () => {
	console.log(`Listening to port ${port}`)
})
