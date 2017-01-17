const express = require('express');
const path = require('path');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

router.get('/index.html', function (req, res) {
  //let tweets = tweetBank.list();
  res.send('hello');
});

router.get('/stylesheets/style.css', function (req, res) {
  //let tweets = tweetBank.list();
  //res.sendFile('/Users/Marianna/Documents/Grace Hopper/Junior/twitter-js/public/stylesheets/style.css');
  res.sendFile('style.css', { root: path.join(__dirname, '../public/stylesheets/') });
});



module.exports = router;