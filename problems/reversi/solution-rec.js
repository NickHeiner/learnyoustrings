function reverse(string) {
  if (!string.length) {
    return '';
  }

  return reverse(string.slice(1)) + string[0];
}

module.exports = reverse;
