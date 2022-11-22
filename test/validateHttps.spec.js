const { validateHttp } = require('../validateHttp');
const { dataSample } = require('./sample');

describe('validateHttp', () => {
    it('mdLinks comprobando que es una función', () => {
      expect(typeof validateHttp).toBe('function');
    });
  
    it('validateHttp retorna validate true', (done) => {
     
        validateHttp(dataSample.pathFile, { validate: false })
        .then((ans) => {
          expect(ans).toEqual(dataSample.validateTrue);
          done()
        })
    }); 
  });
