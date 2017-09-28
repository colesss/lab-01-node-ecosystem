'use strict';

const arithmetic = require('../lib/arithmetic.js');
const expect = require('expect');

describe ('Arithmetic', function() {

  it('can add 2 numbers properly', function() {
    let result = arithmetic.add(5, 3);
    expect(result).toEqual(8);
  });

  it('requires 2 arguments', function() {
    let result = arithmetic.add('foo',5);
    expect(result).toEqual(null);
  });

  it('can subtract 2 numbers properly', function() {
    let result = arithmetic.subtract(3, 5);
    expect(result).toEqual(2);
  });
  
});
