const express = require('express')
const app = express()
const port = 3003


app.use(express.static(__dirname + '/public'))

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views3/home.html')
})

app.get('/family', function (req, res) {
    res.sendFile(__dirname + '/views3/family.html')
})

app.get('/films', function (req, res) {
    res.sendFile(__dirname + '/views3/films.html')
})

app.get('/favBooks', function (req, res) {
    res.sendFile(__dirname + '/views3/favBooks.html')
})

app.listen(port, () => {
	console.log(`Listening to port ${port}`)
})
