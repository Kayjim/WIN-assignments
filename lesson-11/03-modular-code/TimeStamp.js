const moment = require('moment');

module.exports = { getTime: () => moment().format('h:mm:ss a') };