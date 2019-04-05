var superHeroes = [
    ["Batman", "Bruce Wayne"],
    ["Spiderman", "Peter Parker"],
    ["The Flash", "Barry Allen"]
];

secretIdentity = superHeroes.map(revealArray => `${revealArray[0]} is ${revealArray[1]}`);
console.log(secretIdentity.join('\n'));

// console.log(superHeroes.map(h => `${h.hero} is ${h.identity}`).join(', '));