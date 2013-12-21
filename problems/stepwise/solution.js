var str = process.argv[2],
    stepSize = Number(process.argv[3]),
    result = '';

for (var index = 0; index < str.length; index += stepSize) {
  result += str[index];
}

console.log(result);