var str = process.argv[2];

function reverse(string) {
  if (!string.length) {
    return '';
  }

  return reverse(string.slice(1)) + string[0];
}

console.log(reverse(str));