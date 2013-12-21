var str = process.argv[2],
    suffix = process.argv[3],

    strIndexOfSuffix = str.indexOf(suffix);

console.log(strIndexOfSuffix === str.length - suffix.length && strIndexOfSuffix !== -1);