var getRandomString = require('../../helpers/get-random-string');

module.exports = function () {

  var str = getRandomString(),
      args = [str, str.substring(0, 3)];

  return {
    args: args,
    stdin: null
  }
}