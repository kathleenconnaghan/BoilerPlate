const express = require('express');
const app = express();
const path =require('path')
const morgan = require('morgan');
const bodyParser = require('body-parser');

// ------ Logging Middleware: server logs for debugging
app.use(morgan('dev'));

//--------- Static Middleware: for requests for static assets from server (.js, .css, imgs)
app.use(express.static(path.join(__dirname, '../public')));

//------- Body Parser: middleware to parse the body in the req.body 
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//----------- matches all requests to /api
app.use('/api', require('./apiRoutes'));

// ------------- SPA
// GOES AFTER ALL ROUTES : Send index.html for any other requests
app.get('*', function(req, res){
  console.log('get request 1 !!!!!!')
    res.sendFile(path.join(__dirname, '../public/index.html'))
  });

// ---------- Log out 500 errors
app.use(function(err, req, res, next) {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal Server Error!');
});