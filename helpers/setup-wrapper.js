'use strict';

var path = require('path'),
    Readable = require('stream').Readable;

function setupWrapper(solutionDir, argLists) {
  return function() {
    var file = process.argv[3],
        solution = require(path.resolve(solutionDir, 'solution')),
        submission = require(path.resolve(process.cwd(), file)),

        streamB = new Readable(),
        streamA = new Readable();

    argLists.forEach(function (args, index) {
      streamB.push(JSON.stringify(solution.apply(null, args)));
      streamA.push(JSON.stringify(submission.apply(null, args)));

      if (index !== argLists.length - 1) {
        streamB.push('\n');
        streamA.push('\n');
      }
    });

    streamB.push(null);
    streamA.push(null);

    return {
      a: streamA,
      b: streamB
    };
  };
}

module.exports = setupWrapper;