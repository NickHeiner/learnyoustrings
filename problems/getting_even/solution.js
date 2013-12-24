function printEvenChars(str) {

  var result = '';

  for (var index = 0; index < str.length; index += 2) {
    result += str[index];
  }

  return result;
}

module.exports = printEvenChars;
