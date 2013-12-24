function isPalindrome(str) {

  var isPalindrome = true;

  for (var index = 0; index < str.length; index++) {
    var indexFromEnd = str.length - 1 - index;

    if (str[index] !== str[indexFromEnd]) {
      isPalindrome = false;
      break;
    }
  }

  return isPalindrome;
}

module.exports = isPalindrome;