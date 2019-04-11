console.log($('header'));
console.log($('section'));
var current = $('section.current');
console.log(current);
console.log(current.next());
console.log(current.prev().find('h2'));
console.log($('h2.highlight').closest('div'));
console.log($('section:has(h2)'));