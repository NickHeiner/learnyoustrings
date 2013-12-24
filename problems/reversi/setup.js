var getRandomString = require('../../helpers/get-random-string'),
    setupWrapper = require('../../helpers/setup-wrapper');

module.exports = setupWrapper(__dirname, [[getRandomString()], [getRandomString()], ['']]);