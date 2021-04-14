'use strict';
var http = require('http');
var port = process.env.PORT || 1337;
var express = require("express");

var app = express();


var controlers=require("./controllers")
controlers.init(app);


var server = http.createServer(app);
server.listen(port);
