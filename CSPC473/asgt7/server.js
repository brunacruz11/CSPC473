#!/usr/bin/env node
/* jshint node: true, curly: true, eqeqeq: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, nonew: true, quotmark: double, strict: true, undef: true, unused: true */
"use strict";

var express = require("express"),
	http = require("http"),
	body = require("body-parser"),
	redis = require("redis"),
	app = express(),
	db = redis.createClient(),
	server = http.createServer(app);


app.use(express.static(__dirname + "/client"));
app.use(body.json());
// tell Express to parse incoming JSON objects 
app.use(body.urlencoded({extended: true}));

var insert = function(key, value) {
	db.set(key, value, function (error, result) {
		if(!error) {
			console.log(key + "added");
		}
	});

	db.set(value, key, function (error, result) {
		if(!error) {
			console.log(value+ "added");
		}
	});
};

app.post("/shorter", function (req, res) {
	var url = req.body.redirect;

	//check if this is shortener
	if(url.indexOf(".") < 0 ) {
		db.get(url, function (error, result) {
			return res.json(result);
		});
	//it is not shortener
	} else {
		
		db.exists(url, function (error, check) {
			//this url was shortener before
			if(check === 1) {
				//return the shortener
				db.get(url, function (error, result) {
					return res.json(result);
				});
			//it was never shortened before. Add to db
			} else {

				//concatenate all ascii code from the url as a string
				var shortURL = url.charCodeAt(3).toString(10);
				var i;
				for(i = 4; i < url.length; i++) {
					shortURL = shortURL.concat(url.charCodeAt(i).toString(10));
				}

				//transform the string into a number, so I can use the method toString()
				shortURL = parseInt(shortURL, 10);
				shortURL = shortURL.toString(36);

				insert(url, shortURL);
				db.zadd("populars", 0, shortURL);
				return res.json(shortURL);

			}

		});
	}
});

app.post("/populars", function (req, res) {
	console.log("populars server side");
	var obj = {};
	db.zrevrange("populars", 0, 9, "WITHSCORES", function (error, data) {
		return res.json(data);
	});
});



app.get("/:link", function (req, res) {
	var url = req.params.link;
	console.log(url);

	db.get(url, function (error, result) {
		if(!error) {
			db.zincrby("populars", 1, url);
			return res.redirect("http://"+result);
		} else {
			res.writeHead(404, { 
				'Content-Type' : 'application/json' 
			});
			res.write("invalid url.");
		}
	});
	
	

	//check if this is shortener
});

server.listen(3000);
console.log("Server running on port 3000");
