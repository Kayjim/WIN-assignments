var woolOwners = [
    {
        "master": 1
    },
    {
        "dame": 1
    },
    {
      "little boy": 1,
      "location": "down the lane"
    }
];

var totalBags = 0;
var haveYouAnyWool = function() {
    for (var i = 0; i < woolOwners.length; i++) {
        totalBags = totalBags + i;
    }
    return (i);
};

var bags = haveYouAnyWool();

function baabaaBlackSheep() {
    console.log("BaaBaa BlackSheep have you any wool?");
    if (bags > 0) {
        console.log("yes sir, yes sir " + totalBags + " bags full");
    }
}

function oneForMy() {
    for (var i = 0; i < 2; i++) {
        var people = woolOwners.map(o => Object.keys(o)[0]);
        var person = people[i].toString();
        console.log("one for my " + person);
    }
}

baabaaBlackSheep();
oneForMy();

var boy = Object.keys(woolOwners[2])[0];
var littleBoy = woolOwners[2];

var whereHeLives = littleBoy.location;
console.log("one for the " + boy + " that lives " + whereHeLives);