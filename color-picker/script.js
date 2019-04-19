// const brain = require('brain.js');

function getRgb(hex) {
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: Math.round(parseInt(result[1], 16) / 2.55) / 100,
        g: Math.round(parseInt(result[2], 16) / 2.55) / 100,
        b: Math.round(parseInt(result[3], 16) / 2.55) / 100,
    } : null;
}

const network = new brain.NeuralNetwork();

var rgb = [
    // {input: {r: 217, g: 54, b: 14}, output: {white: 0.5, black: 0.5}},
    {input: {r: 0, g: 0, b: 0}, output: {white: 1}},
    {input: {r: 90, g: 16, b: 149}, output: {white: 1}},
    {input: {r: 84, g: 168, b: 169}, output: {white: 1}},
    {input: {r: 186, g: 218, b: 85}, output: {white: 1}},
    {input: {r: 96, g: 96, b: 81}, output: {white: 1}},
    {input: {r: 239, g: 37, b: 142}, output: {white: 1}},
    {input: {r: 255, g: 255, b: 255}, output: {black: 1}},
    {input: {r: 79, g: 248, b: 41}, output: {black: 1}},
    {input: {r: 210, g: 212, b: 231}, output: {black: 1}},
    {input: {r: 190, g: 201, b: 183}, output: {black: 1}},
    {input: {r: 101, g: 247, b: 26}, output: {black: 1}},
    {input: {r: 177, g: 221, b: 117}, output: {black: 1}}
];

var data = rgb.map(o => ({input: {r: o.input.r/255, g: o.input.g/255, b: o.input.b/255}, output: o.output}));

network.train(data);

console.log(network.run({r: 90/255, g: 16/255, b: 149/255}));

$('#color').on('change', function(e) {
    var hex = $(this).val()
    var rgb = getRgb(hex);
    console.log(rgb);
    var color = brain.likely(rgb, network);
   $('#div').css({
       'background-color': hex,
       'color': color
    });
});