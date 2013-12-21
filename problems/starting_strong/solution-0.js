var str = process.argv[2],
    potentialPrefix = process.argv[3];

console.log(str.indexOf(potentialPrefix) === 0)