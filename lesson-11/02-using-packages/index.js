const request = require('request-promise');
const moment = require('moment');

setInterval(() => {
    request({uri: 'http://jsonplaceholder.typicode.com/posts/1', json: true})
        .then(res => console.log(res));
    console.log(moment().format('h:mm:ss a'));
}, 3000);