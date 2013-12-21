var str = process.argv[2];

function getCharCounts(soFar, string) {
  if (!string.length) {
    return soFar;
  }

  var currChar = string[0];
  if (!soFar[currChar] === undefined) {
    soFar[currChar] = 0;
  }

  soFar[currChar] += 1;

  return getCharCounts(soFar, string.slice(1));
}

console.log(getCharCounts(str));