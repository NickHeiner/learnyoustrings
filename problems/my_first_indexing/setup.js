var getRandomString = require('../../helpers/get-random-string');

module.exports = function () {
  return {
    args: [getRandomString()],
    stdin: null
  }
}