var header = document.querySelector('header');
var sections = document.querySelectorAll('section');
var currentSection = document.querySelector('section.current');
var currentSibling = currentSection.nextElementSibling;
var currentPrevH2 = currentSection.previousElementSibling.querySelector('h2');
// var divWithH2Highlight = document.querySelector('div:has(h2.highlight)');
// var sectionsWithH2 = document.querySelectorAll('section:has(h2)');
// :has() is not yet supported :(
var divWithH2Highlight = document.querySelector('h2.highlight').parentElement.parentElement;
var sectionsWithH2 = [...document.querySelectorAll('section')].filter(e => e.querySelector('h2') != null);
// Or Array.from() instead of spread, but spread looks nicer.
// Or [...document.querySelectorAll('h2')].map(e => e.parentElement)
//     but that would get parents of h2s that aren't sections if they existed.

console.log(header);
console.log(sections);
console.log(currentSection);
console.log(currentSibling);
console.log(currentPrevH2);
console.log(divWithH2Highlight);
console.log(sectionsWithH2);