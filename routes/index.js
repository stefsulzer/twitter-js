const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');
const path = require('path'); // WHAT IS THIS? Don't need to know?

router.use(express.static('public'));

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var list = tweetBank.find( {name: name} );
  res.render( 'index', { tweets: contents } );
});

// router.get('/stylesheets/style.css', function(req, res) {
//   // res.sendFile(path.join(__dirname, '../public/stylesheets/style.css')); // works
//   res.sendFile(path.join(__dirname, '../public/stylesheets', 'style.css')); // also works.
// });

module.exports = router;
