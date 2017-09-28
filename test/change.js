var makinChange = require('../change');
var chai = require('chai');
var expect = chai.expect;

describe('Testing Change Machine', function() {
    context('given the amount of 47 dollars', function() {
      it('returns the array of to show bills from change machine', function() {
        var change = makinChange(47);
        expect(change).to.eql([2,0,1,2]);
      });

  });
});
