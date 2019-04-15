var http = require('q-io/http');

http.read('http://localhost:1337').then(json => console.log(JSON.parse(json)));