const express = require('express');
const volleyball = require('volleyball'); 
const nunjucks = require('nunjucks');
// app = require('express')();

const app = express();




app.listen(3000, function(){
  console.log('server listening');
});

// app.listen sets up the server, from this point on everything is hooked up.
app.use(function (req, res, next) {
    // do your logging here
    console.log('Request Type:', req.method, req.originalUrl);
    console.log('Status Code:', res.statusCode);
    // console.log('Path:',  req.path); <--- does similiar/if not same thing.
    // call `next`, or else your app will be a black hole — receiving requests but never properly responding
    next();
})

app.use(volleyball);


const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Grace Hopper'}];
app.get('/', function(req, res, next){
  res.render( 'index', {title: 'Hall of Fame', people: people} );
})

// another route for when client is trying to reach localhost:3000/news
app.get('/news', function(req, res, next){
  res.send("hooray for news");
})


app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', {noCache: true}); // point nunjucks to the proper directory for templates

//----------------------------
//nunjucks experiment

var locals = { title: 'An Example' };
//nunjucks.configure('views', {noCache: true});

nunjucks.render('index.html', locals, function (err, output){
	//if (err) console.log (err);
	console.log(output);
});





























