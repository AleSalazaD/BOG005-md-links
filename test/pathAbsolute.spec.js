const {pathAbsoluteExists} = require('../mdPathAbsolute');
// const route = 'fileTest'

describe('pathAbsoluteExists', () => {
  it('should be a function', () => {
    expect(typeof pathAbsoluteExists).toBe('function');
  });
});
