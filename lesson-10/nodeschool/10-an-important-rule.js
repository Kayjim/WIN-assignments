var alwaysThrows = () => { throw new Error('OH NOES') };
function iterate(arg) { console.log(arg); return arg + 1 };

Promise.resolve(1)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(arg => { iterate(arg); alwaysThrows() })
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .catch(err => console.log(err.message));