'use strict';

const greet = require('../lib/greet.js');
const expect = require('expect');

describe ('Greet', function() {

  it('properly handles a string', function() {

    let result = greet.greet('world');
    expect(result).toBe('hello world');

  });
});
