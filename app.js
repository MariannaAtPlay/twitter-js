const express = require('express');
const app = express();

app.listen(3000, function(){
  console.log('server listening');
});

// app.listen sets up the server, from this point on everything is hooked up.

app.use(function (req, res, next) {
    // do your logging here
    console.log('Request Type:', req.method, 'Request URL:', req.originalUrl);
    // call `next`, or else your app will be a black hole — receiving requests but never properly responding
    next();
})

app.get('/', function(req, res, next){
  res.send("welcome");
})

// another route for when client is trying to reach localhost:3000/news
app.get('/news', function(req, res, next){
  res.send("hooray for news");
})