const {pathAbsoluteExists} = require('../pathAbsolute');

describe('pathAbsoluteExists', () => {
  it('should be a function', () => {
    expect(typeof pathAbsoluteExists).toBe('function');
  });
});