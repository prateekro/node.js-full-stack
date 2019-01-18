const express = require('express')
const app = express()
const port = 3000

app.get('/', function (req, res) {
   res.send('Hello World');
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log(`Example app listening on port ${port}!`)
})
