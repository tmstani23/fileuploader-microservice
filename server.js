'use strict';

var express = require('express');
var multer  = require('multer')
var upload = multer({ dest: 'fileanalyse/' })
var cors = require('cors');

// require and use "multer"...

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.get('/hello', function(req, res){
  res.json({greetings: "Hello, API"});
});

app.post('/api/fileanalyse', upload.single('upfile'), function (req, res, next) {
  // req.file is the `avatar` file
  //console.log(req.body);
  //console.log(req.file);
  // req.body will hold the text fields, if there were any
  res.json({
    filename: req.file.originalname,
    file_size: req.file.size
  });
})

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
