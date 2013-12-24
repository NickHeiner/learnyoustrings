function reverseString(str) {

  var result = '';

  for (var index = 0; index < str.length; index++) {
    var indexFromEnd = str.length - 1 - index;

    result += str[indexFromEnd];
  }

  return result;
}

module.exports = reverseString;