const express = require( 'express' );
const app = express();
const chalk = require('chalk');
const request = chalk.blue;
const response = chalk.green;
const volleyball = require('volleyball');
const nunjucks = require('nunjucks');

var data = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
}; // our objects for the nunjuck rendering.

nunjucks.configure('views', {noCache: true}); //  needs to slash before view
nunjucks.render('index.html', data, function(err, output) {
  if (err) throw err;
  console.log(output);
} );

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks

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

const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
const fillIns = {title: 'Hall of Fame', people: people};
app.get('/halloffame', function (req, res) {
  res.render('index.html', fillIns);
});



app.listen(3000, function() {
  console.log('This app listening on port 3000!');
});

