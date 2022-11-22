const { fnStats} = require('./stats');
const { fnBroken } = require('./stats');
const { mdLinks } = require("./index");
const terminal = process.argv;
const route = process.argv[2];

// mdLinks(route)
//   .then((rest) => console.log("respuesta mdLinks: ", rest))
//   .catch((err) => console.log(err));

// se hacen condicionales para saber donde se encuentran las validaciones utilizando el metodo includes 
let validate = (route, terminal) => {
  if (terminal.length === 3) {
      mdLinks(route).then((rest) => console.log("answer to mdLinks: ", rest))
  } else if (route && terminal.includes('--validate') && terminal.length === 4) {
      mdLinks(route, { validate: true }).then((rest) => console.log('validate true', rest))
  } else if (route && terminal.includes('--stats') && terminal.length === 4) {
      mdLinks(route).then((rest) => console.log('stats true', fnStats(rest)))//Llama a función stats        
  } else if (route && terminal.length === 5 && terminal.includes('--validate', '--stats') || terminal.includes('--stats', '--validate')) {
      mdLinks(route, { validate: true }).then((rest) => console.log('--validate && --stats', fnBroken(rest)))//fnbroke        
  } else if (route || terminal === undefined) {
      throw Error('Comando incorrecto, intente con --validate o --stats')
  } else {
      throw Error(`Comando incorrecto, intente con --validate o --stats`);
  }
};

validate(route, terminal)
