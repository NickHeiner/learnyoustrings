function stepwise(str, stepSize) {

  var result = '';

  for (var index = 0; index < str.length; index += stepSize) {
    result += str[index];
  }

  return result;
}

module.exports = stepwise;