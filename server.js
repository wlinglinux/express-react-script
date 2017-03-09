var express = require('express')
// var bodyParser = require('body-parser')
var fs = require('fs')

var app = express()

// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
// app.use(bodyParser.json())

// app.use(function (req, res) {
//   res.setHeader('Content-Type', 'text/plain')
//   res.write('you posted:\n')
//   res.end(JSON.stringify(req.body, null, 2))
// })

app.get('/', function(req, res){
  res.send('hello world');
});
app.get('/api/items', function(req, res) {
  fs.readFile('goods.json', 'utf8', (err, data) => {
    if (err) throw err;
    res.send(JSON.parse(data).items);
  });
});

app.listen(3001, function(){
  console.log('server is running;')
})
