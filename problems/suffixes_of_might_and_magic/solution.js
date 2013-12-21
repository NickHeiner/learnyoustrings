var str = process.argv[2],
    suffix = process.argv[3],

    isSuffix = true;

for (var index = 0; index < suffix.length; index++) {
  var strIndexToCheck = str.length - 1 - index,
      suffixIndexToCheck = suffix.length - 1 - index;

  if (str[strIndexToCheck] !== suffix[suffixIndexToCheck]) {
    isSuffix = false;
    break;
  }
}

console.log(isSuffix);