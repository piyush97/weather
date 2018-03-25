const express = require('express')
app.set('view engine', 'ejs')
const app = express()

app.get('/', function (req, res) {
  // NEW CODE
  res.render('index');
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})