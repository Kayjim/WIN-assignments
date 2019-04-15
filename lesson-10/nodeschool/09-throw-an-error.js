var parsePromised = json => new Promise((res, rej) => res(JSON.parse(json)));
parsePromised(process.argv[2]).then(console.log).catch(err => console.log(err.message));