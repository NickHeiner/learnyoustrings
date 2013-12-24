function checkSuffix(str, suffix) {

  var isSuffix = true;

  for (var index = 0; index < suffix.length; index++) {
    var strIndexToCheck = str.length - 1 - index,
        suffixIndexToCheck = suffix.length - 1 - index;

    if (str[strIndexToCheck] !== suffix[suffixIndexToCheck]) {
      isSuffix = false;
      break;
    }
  }

  return isSuffix;
}

module.exports = checkSuffix;
