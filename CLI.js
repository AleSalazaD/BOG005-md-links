const { totalUniqueLinks } = require("./linkState");
const { mdLinks } = require('./index');
const terminal = process.argv;
const route = process.argv[2];

mdLinks(terminal, {validate: true}) // se lleva al CLI
  .then((rest) => console.log("respuesta mdLinks: ", rest))
  .catch((err) => console.log(err));

// se hacen condicionales para saber donde se encuentran las validaciones utilizando el metodo includes 

if(terminal.length === 3){
    mdLinks(terminal) // se lleva al CLI
  .then((rest) => console.log("respuesta mdLinks: ", rest))
  .catch((err) => console.log(err));
} else if( terminal.includes('--validate') && terminal.length === 4) {
    mdLinks(terminal, {validate: true}) // se lleva al CLI
  .then((rest) => console.log("respuesta mdLinks: ", rest))
  .catch((err) => console.log(err));
} else if (terminal.includes('--stats') && terminal.length === 4 ) {
    mdLinks(terminal) // se lleva al CLI
  .then((rest) => console.log(fnStats(rest)))
  .catch((err) => console.log(err));
    //Llama a función stats
} else if ( terminal.length === 5 && terminal.includes('--validate', 'stats')) {
    mdLinks(terminal, {validate: true}) // se lleva al CLI
  .then((rest) => console.log(fnBroken(rest)))
  .catch((err) => console.log(err))
    //Llama a la función del broken
    } else {

}