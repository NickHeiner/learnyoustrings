function dropVowels(str) {

  var result = '',

      vowels = ['a', 'e', 'i', 'o', 'u'];

  for (var index = 0; index < str.length; index++) {
    if (vowels.indexOf(str[index]) === -1) {
      result += str[index];
    }
  }

  return result;
}

module.exports = dropVowels;