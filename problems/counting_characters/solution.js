function charCounts(str) {

  var result = {};

  for (var index = 0; index < str.length; index++) {

    var currChar = str[index];
    if (result[currChar] === undefined) {
      result[currChar] = 0;
    }

    result[currChar] += 1;
  }

  return result;
}

module.exports = charCounts;
