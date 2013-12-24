function isSuffix(str, suffix) {

  var strIndexOfSuffix = str.indexOf(suffix);

  return strIndexOfSuffix === str.length - suffix.length && strIndexOfSuffix !== -1;
}

module.exports = isSuffix;
