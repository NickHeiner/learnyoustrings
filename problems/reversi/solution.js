var str = process.argv[2],
    result = '';

for (var index = 0; index < str.length; index++) {
  var indexFromEnd = str.length - 1 - index;

  result += str[indexFromEnd];
}

console.log(result);