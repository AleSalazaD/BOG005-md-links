const {pathAbsoluteExists} = require('../mdPathAbsolute');

// const route = 'D:\\Programacion\\LABORATORIA\\BOG005-md-links\\fileTest';
const route = 'fileTest'

describe('pathAbsoluteExists', () => {
  it('should be a function', () => {
    expect(typeof pathAbsoluteExists).toBe('function');
  });
});

// Pasa si lo comparo con string, pero es una funcion
