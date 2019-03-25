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

/*
// Could do something like this, but eh.
var players = {
    "Alice": 0,
    "Bob": 0
}
*/

var p1name = "Alice"
var p1score = 0
var p2name = "Bob"
var p2score = 0

var weapons = ["rock", "paper", "scissors"];


while(p1score <  3 && p2score < 3) {
    var weapon1 = Math.floor(Math.random() * weapons.length);
    var weapon2 = Math.floor(Math.random() * weapons.length);
    console.log(`${p1name}: ${weapons[weapon1]}`);
    console.log(`${p2name}: ${weapons[weapon2]}`);

    if((weapon1 + 1) % 3 == weapon2) {
        p2score++;
        console.log(`${p2name} wins this round.`);
    } else if((weapon2 + 1) % 3 == weapon1) {
        p1score++;
        console.log(`${p1name} wins this round.`);
    } else {
        console.log("Tie!");
    }
}

if(p1score == 3) {
    console.log(`${p1name} wins! ${p2name} won ${p2score} rounds.`);
} else {
    console.log(`${p2name} wins! ${p1name} won ${p1score} rounds.`);
}

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