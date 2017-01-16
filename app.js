const express = require('express');
const app = express();

app.listen(3000, function(){
  console.log('server listening');
});

// app.listen sets up the server, from this point on everything is hooked up.

app.get('/', function(req, res, next){
  res.send("hooray");
})