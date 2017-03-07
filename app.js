const express = require( 'express' );
const app = express(); 
const chalk = require('chalk');
const request = chalk.blue;
const response = chalk.green;
const volleyball = require('volleyball');


app.use(volleyball);

// app.use(function (req, res, next) {
//     console.log(request(req.method, req.url), response(res.statusCode));
//     next();
// })

// app.use('/special/', function (req,res,next){
//   console.log('special area');
//   next();

// })

app.get('/', function (req, res) {
  res.send('Hello World!')
});

app.get('/news', function (req, res) {
  res.send('This is the news')
});



app.listen(3000, function() {
  console.log('This app listening on port 3000!');
});

