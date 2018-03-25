const express = require('express')
const app = express()

app.get('/', function (req, res) {
app.set('view engine', 'ejs')
  res.render('index');
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})