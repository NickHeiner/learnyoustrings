var getRandomString = require('../../helpers/get-random-string'),
    setupWrapper = require('../../helpers/setup-wrapper'),

    str = getRandomString();

module.exports = setupWrapper(__dirname, [[str, str.substring(0, 3)], ['asdf', 'not-a-prefix']]);
