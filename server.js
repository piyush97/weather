const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express()

const apiKey = '49b2f0de66bca1b85d63cc89607527a4';

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('index', {weather: null, error: null});
})

app.post('/', function (req, res) {
  let city = req.body.city;
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`

  request(url, function (err, response, body) {
    if(err){
      res.render('index', {weather: null, error: 'Dude, enter correct city naa!'});
    } else {
      let weather = JSON.parse(body)
      if(weather.main == undefined){
        res.render('index', {weather: null, error: 'Dude, enter correct city naa!'});
      } else {
        let weatherText = `Woah! It's ${weather.main.temp} degrees celcius in ${weather.name}! `;
        res.render('index', {weather: weatherText, error: null});
      

      }
    }
  });
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})