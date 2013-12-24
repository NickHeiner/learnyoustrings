function checkPrefix(str, prefix) {

  var isPrefix = true;

  for (var index = 0; index < prefix.length; index++) {
    if (str[index] !== prefix[index]) {
      isPrefix = false;
      break;
    }
  }

  return isPrefix;
}

module.exports = checkPrefix;


