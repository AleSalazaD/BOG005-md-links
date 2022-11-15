const path = require('path');
const fs = require('fs');
const terminal = process.argv

// ************ Verifica si la ruta existe y si es absoluta, convirtiéndola en absoluta si no lo es**********
const pathAbsoluteExists = (route) => {
  let absolutePath = '';
  if (fs.existsSync(route) == false) {
      console.log('Por favor verifica la ruta proporcionada.');
  } else {
      console.log('La ruta es correcta. Verifiquemos si es absoluta');
        if (path.isAbsolute(route) === false) {
        absolutePath = path.resolve(route);
        console.log('La volví absoluta porque no lo era: ', absolutePath);
        } else {
        absolutePath = route;
        console.log('Era absoluta y se queda así: ', absolutePath);
        }
      return absolutePath;
     
    } 
};
pathAbsoluteExists(terminal[2]);  

module.exports = { pathAbsoluteExists, };
