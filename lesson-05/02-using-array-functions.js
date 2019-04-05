var players = [
	{firstName: 'Cam', lastName: 'Newton', position: 'QB', touchdowns: 32},
	{firstName: 'Derek', lastName: 'Anderson', position: 'QB', touchdowns: 0},
	{firstName: 'Jonathan', lastName: 'Stewart', position: 'RB', touchdowns: 12},
	{firstName: 'Mike', lastName: 'Tolbert', position: 'RB', touchdowns: 8},
	{firstName: 'Fozzy', lastName: 'Whittaker', position: 'RB', touchdowns: 3},
	{firstName: 'Ted', lastName: 'Ginn', position: 'WR', touchdowns: 9},
	{firstName: 'Devin', lastName: 'Funchess', position: 'WR', touchdowns: 2}
];

console.log(players.find(p => p.firstName == 'Mike'));
console.log(players.filter(p => p.position == 'RB'));
console.log(players.map(p => p.lastName));
console.log(players.filter(p => p.position == 'RB' && p.touchdowns > 5).map(p => `${p.firstName} ${p.lastName}`));
console.log(players.filter(p => p.position == 'RB').reduce((acc, p) => acc + p.touchdowns, 0));