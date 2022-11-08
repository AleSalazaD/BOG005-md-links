// const { Console } = require('console');
// const { access, constants } = require('node: fs');
const path = require("node:path");
const fs = require("fs");

//TO DO:
// cómo organizar el boilerplate
// cómo leer la ruta por consola ===> process.argv resolver en CLI
// cómo sé si la ruta existe ===> método fs.existsSync
// Cómo sé si una ruta es absoluta ===> método isAbsolut() para resolverla método resolve()
//cómo leo los archivos dentro de carpetas ===> con recursividad
//cómo discrimino los links dentro de esos archivos ===>
// Crear objeto de links ===>
// cómo unir dos rutas y para qué ===> método join()

// let route = "./fileTest"; // relative route
//  let route = "D:/Programacion/LABORATORIA/BOG005-md-links/fileTest"; // absolute route
let route = './fileTest/me.md'
// *****************************************************************************************

fs.readFile(route, "utf-8", (error, data) => {
  if (!error) {
    console.log(data);
  } else {
    console.log(`Algo no funciona: ${error}`);
  }
});




// ********************** FUNCIÓN ASÍNCRONA CON ACCESS PARA SABER SI UNA RUTA EXISTE... NO SUPE HACERLA FUNCIONAR******************
// const pathExists = (route) => {fs.access(route, fs.constants.F_OK, (err) => {
//   // console.log(`${route} ${err ? 'does not exist' : 'exists'}`);
//   console.log(`${route} ${err ? true : false}`);
//   console.log(err);

// })};
// pathExists(routeArgument)

// if (pathExists(routeArgument) === true) {
//   console.log('El path no existe, sale de la API');
// } else if ( pathExists(routeArgument) === false)
//   {console.log('Se corre la función que valida la absolutez del path')};
// **********************************************************************************************************************************
