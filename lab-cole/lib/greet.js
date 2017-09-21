'use strict';

let greet = module.exports = {};

greet.greet = function(name) {
  if (typeof (name) === 'string') {
    return 'hello ' + name;
  } else {
    return 'null';
  }
};
