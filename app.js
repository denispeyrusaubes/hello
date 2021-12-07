const express = require('express')
const app = express()

app.get('/', function (req, res) {
  var ip = require('ip');
  res.send('Hello from ' + ip.address() + '\n')
})

app.listen(3000, function () {
  console.log('Hello app is listening on port 3000!')
})
