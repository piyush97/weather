const express = require('express');
const bodyParser = require('body-parser');
const app = express()

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('index');
})
app.post('/', function (req, res) {
  let city = req.body.city;
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${49b2f0de66bca1b85d63cc89607527a4
}`
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

request(url, function (err, response, body) {
    if(err){
      res.render('index', {weather: null, error: 'Try until you succeed! :P'});