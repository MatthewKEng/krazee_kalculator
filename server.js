var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var math = require('./routes/math');


app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/math', math);

app.get('/', function(req,res) {
  res.sendFile(path.join(__dirname, 'public/views/index.html'));
});



app.listen(3000);
