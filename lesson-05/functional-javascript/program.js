module.exports = input => input.toUpperCase();

module.exports = (operation, num) => {
    for(var i = 0; i < num; i++) {
        operation();
    }
}
// better, modified from Pavlo's:
var repeat = (operation, num) => num > 0 ? repeat(operation, --num) : operation();
module.exports = repeat;

module.exports = numbers => numbers.map(n => n * 2);

module.exports = messages => messages.filter(m => m.message.length < 50).map(m => m.message);

module.exports = goodUsers => testUsers => testUsers.every(tu => goodUsers.some(gu => gu.id == tu.id));

module.exports = inputWords => inputWords.reduce((acc, w) => Object.assign(acc, {[w]: acc[w] == undefined ? 1 : acc[w] + 1}), {})

var reduce = (arr, func, acc, i=0) => {
    return i < arr.length ? reduce(arr, func, func(acc, arr[i], i, arr), i+1) : acc;
}
module.exports = reduce;

module.exports = function() {
    return Array.prototype.slice.call(arguments).filter(function(obj) {
        return Object.prototype.hasOwnProperty.call(obj, 'quack')
    }).length
}

module.exports = namespace => (...messages) => console.log(`${namespace} ${messages.join(' ')}`);

module.exports = namespace => (function(...messages) {
    console.log(`${this} ${messages.join(' ')}`);
}).bind(namespace);

// Doesn't work
// module.exports = (arr, fn, thisArg=this) => arr.reduce((acc, item, i, arr) => acc.concat(fn.call(thisArg, item, i, arr)), []);

module.exports = function(arr, fn, thisArg=this) {
    return arr.reduce(function(acc, item, i, arr) {
        acc.push(fn.call(thisArg, item, i, arr));
        return acc;
    }, []);
}

module.exports = (function(obj, fn) {
    spy = {count: 0};
    obj.overridden = obj[fn];
    thisObj = this;
    obj[fn] = function() {
        spy.count++;
        return obj.overridden.apply(thisObj, arguments);
    }
    return spy;
}).bind(this);

function repeat(operation, num) {
    // Modify this so it doesn't cause a stack overflow!
    if (num <= 0) return
    operation()
    return repeat(operation, --num)
  }

  function trampoline(fn) {
    // You probably want to implement a trampoline!
    
  }

  module.exports = function(operation, num) {
    // You probably want to call your trampoline here!
    return repeat(operation, num)
  }