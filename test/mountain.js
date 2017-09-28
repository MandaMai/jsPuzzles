var tallestMountain = require('../mountain');
var biggestNumber = require('../mountain')
var chai = require('chai');
var expect = chai.expect;

describe('Testing Tallest Mountain', function() {
    context('given mountain heights of [1,2,3]', function() {
      it('returns 3 as the tallest mountain', function() {
        var tallest = tallestMountain([1,2,3]);
        expect(tallest).to.equal(3);
      });

  });
});

describe('Testing Biggest Number', function() {
    context('given number list of [1,2,4]', function() {
      it('returns 4 as the biggest number', function() {
        var biggest = biggestNumber([1,2,4]);
        expect(biggest).to.equal(4);
      });

  });
});