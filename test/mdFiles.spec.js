const {isMdFile} = require('../mdFiles');

const route = 'D:\\Programacion\\LABORATORIA\\BOG005-md-links\\fileTest';

describe('isMdFile', () => {

  it('isMdFile deberia ser una función', () => {
    expect(typeof isMdFile). toBe('function');
  });
});
