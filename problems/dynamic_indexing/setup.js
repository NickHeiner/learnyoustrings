var getRandomString = require('../../helpers/get-random-string'),
    getRandomInt = require('../../helpers/get-random-int'),
    setupWrapper = require('../../helpers/setup-wrapper');

var str = getRandomString(),
    args = [str, getRandomInt(0, str.length)];

module.exports = setupWrapper(__dirname, [args, ['asdf', 0], ['omfg', 3]]);