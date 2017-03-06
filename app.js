const express = require( 'express' );
const app = express(); // creates an instance of an express application

app.use(function (req, res, next) {

    console.log(req.method);
    
    // console.log()

    next();
})

app.get('/', function (req, res) {
  res.send('Hello World!')
});

app.get('/news', function (req, res) {
  res.send('This is the news')
});

app.listen(3000, function() {
  console.log('This app listening on port 3000!');
});

