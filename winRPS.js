/* Switch Statements */

var myVar = "b";

switch(myVar) {
    case "a":
        console.log("Hey");
        break;
    case "b":
        console.log("Foo");
    case "c":
        console.log("Bar");
}

/* Rock Paper Scissors */

/*
// Could do something like this, but eh.
var players = {
    "Alice": 0,
    "Bob": 0
}
*/

var hands = ["rock", "paper", "scissors"];
var getHand = () => hands[parseInt(Math.random()*10)%3];

var player1 = {
    name: "Alice",
    getHand: getHand,
    curHand: null,
    wins: 0
}

var player2 = {
    name: "Bob",
    getHand: getHand,
    curHand: null,
    wins: 0
}

var player3 = {
    name: "Charlie",
    getHand: getHand,
    curHand: null,
    wins: 0
}

var player4 = {
    name: "David",
    getHand: getHand,
    curHand: null,
    wins: 0
}

function playRound(p1, p2) {
    p1.curHand = p1.getHand();
    p2.curHand = p2.getHand();

    console.log(`${p1.name}: ${p1.curHand}`);
    console.log(`${p2.name}: ${p2.curHand}`);

    if((hands.indexOf(p1.curHand) + 1) % 3 == hands.indexOf(p2.curHand)) {
        //p2.wins++;
        console.log(`${p2.name} wins this round.`);
        return p2;
    } else if((hands.indexOf(p2.curHand) + 1) % 3 == hands.indexOf(p1.curHand)) {
        //p1.wins++;
        console.log(`${p1.name} wins this round.`);
        return p1;
    } else {
        console.log("Tie!");
        return null;
    }
}

function playGame(player1, player2, playUntil) {
    while(player1.wins < playUntil && player2.wins < playUntil) {
        var roundWinner = playRound(player1, player2);
        if(roundWinner != null) roundWinner.wins++;
    }

    player1.wins = 0
    player2.wins = 0
    // The last value of roundWinner will necessarily be the game winner, which means we don't have to use an if.
    return roundWinner;
    /*
    if(player1.wins == playUntil) {
        console.log(`${player1.name} wins!`);
        return player1;
    } else {
        console.log(`${player2.name} wins!`);
        return player2;
    }
    */
}

function playTournament(player1, player2, player3, player4, playUntil) {
    return playGame(playGame(player1, player2, playUntil), playGame(player3, player4, playUntil), playUntil)
}

console.log(`${playTournament(player1, player2, player3, player4, 5).name} is the world champion`);

// console.log(playGame(player1, player2, 5).name, 'wins!');
// console.log(`${player1.name} won ${player1.wins} rounds.`);
// console.log(`${player2.name} won ${player2.wins} rounds.`);

/* Pseudocode because this is a lot
if w1 is 0:
    if w2 is 0: "Tie"
    if w2 is 1: "p2 wins"
    if w2 is 2: "p1 wins"
if w1 is 1:
    if w2 is 0: "p1 wins"
    if w2 is 1: "Tie"
    if w2 is 2: "p2 wins"
if w1 is 2:
    if w2 is 0: "p2 wins"
    if w2 is 1: "p1 wins"
    if w2 is 2: "Tie"
*/

// Stupid implementation of the above comment.

/*
var arr = [["tie", "p2", "p1"], ["p1", "tie", "p2"], ["p2", "p1", "tie"]];

switch(arr[w1][w2]) {
    case "p1":
        p1score++;
        console.log(`${p1name} wins this round.`);
        break;
    case "p2":
        p2score++;
        console.log(`${p2name} wins this round.`);
        break;
    case "tie":
        console.log("Tie!")
}
*/

// call with something like moves[p1.hand][p2.hand]

/*
var moves = {
    rock: {
        paper: {
            winner: 2,
            verb: "covers"
        },
        scissors: {
            winner: 1,
            verb: "crushes"
        }
    },
    paper: {
        rock: {
            winner: 1,
            verb: "covers"
        },
        scissors: {
            winner: 2,
            verb: "cuts"
        }
    },
    scissors: {
        rock: {
            winner: 2,
            verb: "crushes"
        },
        paper: {
            winner: 1,
            verb: "cuts"
        }
    }
}
*/