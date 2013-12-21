var str = process.argv[2];

function isPalindrome(string) {
  if (string.length <= 1) {
    return true;
  }

  return string[0] === string[string.length - 1] && isPalindrome(string.slice(1, string.length - 1));
}

console.log(isPalindrome(str));