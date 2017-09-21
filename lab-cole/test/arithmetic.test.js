'use strict';

const arithmetic = require('../lib/arithmetic.js');
const expect = require('expect');

describe ('Arithmetic', function() {

  it('can add 2 numbers properly', function() {
    let result = arithmetic.add(5, 3);
    expect(result).toEqual(8);
  });

  it('requires 2 arguments', function() {
    expect(false).toBe(true);
    let result = arithmetic.add('foo',5);
    expect(result).toEqual(8);
  });
  
});
