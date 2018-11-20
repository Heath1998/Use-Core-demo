var express = require("express");
var http = require("http");
var app = express();
 
 
var router = express.Router();
var testRouter =  require('./server/test');
 
 
app.use('/test', testRouter);
http.createServer(app).listen(3000);
