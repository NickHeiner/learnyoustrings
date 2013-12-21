var str = process.argv[2],
    suffix = process.argv[3],

    isSuffix = true;

for (var index = 0; index < suffix.length; index++) {
  if (str[index] !== suffix[index]) {
    isSuffix = false;
    break;
  }
}

console.log(isSuffix);