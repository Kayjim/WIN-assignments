var promise = new Promise((fulfill, reject) => { fulfill('I FIRED'); reject(new Error('I DID NOT FIRE')) })
promise.then(console.log, error => console.log(error.message));