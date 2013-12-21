var getRandomString = require('../../helpers/get-random-string'),
    getRandomInt = require('../../helpers/get-random-int');

module.exports = function () {

  var str = getRandomString(),
      args = [str, getRandomInt(0, str.length)];

  return {
    args: args,
    stdin: null
  }
}