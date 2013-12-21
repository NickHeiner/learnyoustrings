var str = process.argv[2],
    prefix = process.argv[3],

    isPrefix = true;

for (var index = 0; index < prefix.length; index++) {
  if (str[index] !== prefix[index]) {
    isPrefix = false;
    break;
  }
}

console.log(isPrefix);