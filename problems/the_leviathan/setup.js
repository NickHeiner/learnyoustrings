var getRandomString = require('../../helpers/get-random-string');

module.exports = function () {

  var str = getRandomString(),
      args = [str, getRandomString()];

  return {
    args: args,
    stdin: null
  }
}