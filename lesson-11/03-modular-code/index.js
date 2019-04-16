const DataAccess = require('./DataAccess');
const TimeStamp = require('./TimeStamp');

setInterval(() => {
    DataAccess.getPost(1);
    console.log(TimeStamp.getTime());
}, 3000);