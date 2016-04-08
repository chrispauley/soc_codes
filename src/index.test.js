// index.test.js
var expect = require('chai').expect;
var socCodes = require('./index');

describe('soc_codes', function() {
  describe('all', function() {
    it('should be an array of objects', function() {
      expect(socCodes.all).to.satisfy(isArrayOfStrings);

      function isArrayOfStrings(array) {
        return array.every(function(item) {
          return typeof item === 'object';
        });
      }
    });

		it('Should contain `11-1011`', function(){
			expect(socCodes.all[0].soc_code).to.include('11-1011');
		})

    it('Should find `11-1021` in the array', function(){
      expect(true).to.equal(true);
    })
  });
});
