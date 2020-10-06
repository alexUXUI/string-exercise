const chai = require('chai')
const expect = chai.expect
const stringIsValid = require('./index').stringIsValid;

const validString = "+a+==+s+";
const invalidString = "123+s+456+d";

describe('Valid string test suite:', () => {
    it('returns true for valid strings', () => {
        expect(stringIsValid(validString)).to.eq(true);
    });

    it('returns false for invalid strings', () => {
        expect(stringIsValid(invalidString)).to.eq(false);
    });
});