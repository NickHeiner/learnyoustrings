'use strict';

var _ = require('lodash'),
    reduction = require('reduction'),
    getRandomInt = require('./get-random-int');

function getRandomChar() {
  return String.fromCharCode(getRandomInt('a'.charCodeAt(0), 'z'.charCodeAt(0)))
}

function getRandomString() {
  var length = getRandomInt(3, 20);
  return reduction(_.range(length).map(getRandomChar), '+');
}

module.exports = getRandomString;