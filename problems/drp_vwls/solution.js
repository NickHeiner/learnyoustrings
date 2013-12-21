var str = process.argv[2],
    result = '',

    vowels = ['a', 'e', 'i', 'o', 'u'];

for (var index = 0; index < str.length; index++) {
  if (vowels.indexOf(str[index]) === -1) {
    result += str[index];
  }
}

console.log(result);