var _ = require('lodash'),
    reduction = require('reduction');

// from mdn: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// Returns a random integer between min and max
// Using Math.round() will give you a non-uniform distribution!
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomChar() {
  return String.fromCharCode(getRandomInt('a'.charCodeAt(0), 'z'.charCodeAt(0)))
}

function getRandomString() {
  var length = getRandomInt(3, 20);
  return reduction(_.range(length).map(getRandomChar), '+');
}

module.exports = function () {
  return {
    args: [getRandomString()],
    stdin: null
  }
}