var getRandomString = require('../../helpers/get-random-string'),
    setupWrapper = require('../../helpers/setup-wrapper');

var str = getRandomString(),
    args = [str, str.substring(str.length - 3)];

module.exports = setupWrapper(__dirname, [args, ['foo', 'not a suffix']]);