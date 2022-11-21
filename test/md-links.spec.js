const { mdLinks } = require('../index');
const { dataSample } = require('./sample');

describe('mdLinks', () => {
  it('mdLinks comprobando que es una función', () => {
    expect(typeof mdLinks).toBe('function');
  });

  it('mdLinks retorna validate true', (done) => {
   
      mdLinks(dataSample.pathFile, { validate: true })
      .then((ans) => {
        expect(ans).toEqual(dataSample.validateTrue);
        done()
      })
    
 
  });
  
});