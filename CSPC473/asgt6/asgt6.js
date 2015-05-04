var arr = ["rock", "paper", "scissors", "spock", "lizard"];
var result = {
	"wins": 0,
	"ties": 0,
	"losses": 0, 
};

var express = require("express"),
http = require("http"),
app;

app = express();
//app.use(bodyParser.json());
app.use(express.static(__dirname + "/game"));

// tell Express to parse incoming JSON objects 
app.use(express.urlencoded());

app.post("/play/:move", function (req, res) {
	if(req) {
		//console.log(req.params);
		result.lastOutcome = play(req.params.move); 
		res.json(result);
		
	} else {
		res.writeHead(404, { 
				'Content-Type' : 'application/json' 
			});
		res.write("no data received :(");
	}
	res.end();
	
});

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

http.createServer(app).listen(3333);
console.log("Server running on port 3333");