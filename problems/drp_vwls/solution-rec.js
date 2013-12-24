function dropVowels(str) {

  var vowels = 'aeiou';

  function dropVowels(string) {
    if (!string.length) {
      return '';
    }

    var head = string[0],
        tail = string.slice(1);

    return (vowels.indexOf(head) === -1 ? head : '') + dropVowels(tail);
  }

  return dropVowels(str);
}

module.exports = dropVowels;
