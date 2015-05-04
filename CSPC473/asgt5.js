var arr = ["rock", "paper", "scissors", "spock", "lizard"];
var result = {
	"wins": 0,
	"ties": 0,
	"losses": 0, 
};
var outcome = {
	"lastOutcome": "none"
};

var http = require('http'),
url = require('url'),
server;

var play = function(playerMove) {
	var rand = Math.floor(Math.random() * arr.length );
	var computerMove = arr[rand];

	if(playerMove === computerMove) {
		result.ties = result.ties + 1;
		return "tie";

	} else if (playerMove === "rock") {
		if ( (computerMove === "lizard") || (computerMove === "scissors") ) {
			result.wins = result.wins + 1;
			return "win";
		} else {
			result.losses = result.losses + 1;
			return "loss";
		}

	} else if (playerMove === "paper") {
		if( (computerMove === "rock") || (computerMove === "spock") ) {
			result.wins = result.wins + 1;
			return "win";
		} else {
			result.losses = result.losses + 1;
			return "loss";
		}

	} else if (playerMove === "scissors") {
		if ( (computerMove === "paper") || (computerMove === "lizard") ) {
			result.wins = result.wins + 1;
			return "win";
		} else {
			result.losses = result.losses + 1;
			return "loss";
		}

	} else if (playerMove === "spock") {
		if ( (computerMove === "scissors") || (computerMove === "rock") ) {
			result.wins = result.wins + 1;
			return "win";
		} else {
			result.losses = result.losses + 1;
			return "loss";
		}

	} else if (playerMove === "lizard") {
		if ( (computerMove === "spock") || (computerMove = "paper") ) {
			result.wins = result.wins + 1;
			return "win";
		} else {
			result.losses = result.losses + 1;
			return "loss";
		}

	} else {
		return "invalid option";
	}
}

function load (req, res) {
	"use strict";

	//var path = url.parse(req.url).pathname;
	var path;

	if( (req.url === "/play/rock") || (req.url === "/play/paper") || (req.url === "/play/scissors") || (req.url === "/play/lizard") || (req.url === "/play/spock") ) {
		if(req.method === "POST") { 
			path = (req.url);
			path = path.split("/");
			res.writeHead(200, { 
				'Content-Type' : 'application/json' 
			});
			result.lastOutcome = play(path[2]);  
			res.write(JSON.stringify(result));
//			res.write(JSON.stringify([outcome, result]));
			res.end();
		}

	} else {
		res.writeHead(404, { 'Content-Type' : 'text/html' });
		res.write("Invalid url :( ");
		res.end();
	}
}

server = http.createServer(load);
server.listen(3333);
console.log("Server running on port 3333");
