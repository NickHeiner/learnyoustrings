'use strict';

var path = require('path'),
    Readable = require('stream').Readable;

function setupWrapper(solutionDir, argLists) {
  return function() {
    var file = process.argv[3],
        solution = require(path.resolve(solutionDir, 'solution')),
        submission = require(path.resolve(process.cwd(), file)),

        streamA = new Readable(),
        streamB = new Readable();

    argLists.forEach(function (args, index) {
      streamA.push(JSON.stringify(solution(args)));
      streamB.push(JSON.stringify(submission(args)));

      if (index !== argLists.length - 1) {
        streamA.push('\n');
        streamB.push('\n');
      }
    });

    streamA.push(null);
    streamB.push(null);

    return {
      a: streamA,
      b: streamB
    };
  };
}

module.exports = setupWrapper;