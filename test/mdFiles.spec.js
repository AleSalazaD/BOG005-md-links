const {readDirectory} = require('../mdFiles');

const route = 'D:\\Programacion\\LABORATORIA\\BOG005-md-links\\fileTest';

describe('readDirectory', () => {

  it('readDirectory deberia ser una función', () => {
    expect(typeof readDirectory(route)). toBe('function');
  });

});

// Considerar que hay metodos dentro de la funcion, a lo mejor debo separarlos para testearlos.
