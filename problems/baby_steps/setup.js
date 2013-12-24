var setupWrapper = require('../../helpers/setup-wrapper');

function rndint () {
  return Math.ceil(Math.random() * 100)
}

module.exports = setupWrapper(__dirname, [
  [rndint(), rndint()],
  [rndint(), rndint(), rndint(), rndint()]
]);