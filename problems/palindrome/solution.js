var str = process.argv[2],
    isPalindrome = true;

for (var index = 0; index < str.length; index++) {
  var indexFromEnd = str.length - 1 - index;

  if (str[index] !== str[indexFromEnd]) {
    isPalindrome = false;
    break;
  };
}

console.log(isPalindrome);