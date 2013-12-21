var str = process.argv[2],
    result = '';

for (var index = 0; index < str.length; index += 2) {
  result += str[index];
}

console.log(result);