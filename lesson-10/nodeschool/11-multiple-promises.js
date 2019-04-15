async function all(p1, p2) {
    var result = [];
    return new Promise(resolve => p1.then(r => { 
        result.push(r); 
        return p2.then(r => {
            result.push(r);
            resolve(result);
        });
    }));
}

all(getPromise1(), getPromise2()).then(console.log);