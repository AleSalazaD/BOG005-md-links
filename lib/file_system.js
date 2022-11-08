// const { Console } = require("console");
// console.log(process.argv) // Me permite ingresar el path y opciones por consola. Se puede resolver en CLI
const fs = require("fs");
const path = require("node:path");

// *** Metodo para saber si una ruta existe =====>>> solamente encontré cómo hacerlo síncrono, con await o que retorna algo que no me funciona. Está en el otro archivo.

// ***Método que determina si una ruta es absoluta. Devuelve un booleano.
// ***Condicional si la ruta no es absoluta.
// ***Metodo de path que convierte una ruta relativa en una ruta absoluta.

// ***********************LINKS DE PRUEBA************************************************
 let route = "./fileTest"; // relative route
// let route = 'D:/Programacion/LABORATORIA/BOG005-md-links/fileTest'; // absolute route
// let route = './fileTest/me.md'
// ***************************************************************************************

if (fs.existsSync(route) == false) {
  console.log("La ruta NO EXISTE! SALE DE LA API");
} else {
  console.log("La ruta SI EXISTE! Corre la función pathAbsolute");
  function pathAbsolute(routeParameter) {
    let isItAbsolute = path.isAbsolute(routeParameter);
    if (isItAbsolute === false) {
      const absolutePath = path.resolve(routeParameter);
      route = absolutePath;
      console.log("La volví absoluta", route);
    } else if (isItAbsolute === true) {
      route;
      console.log("Era absoluta", routeParameter);
    }
  }
  pathAbsolute(route);
  console.log("Esta es la ruta absoluta", route);
  
}

let arrayMarkFile = []; // Declaro variable que va a contener los archivos md
// Función recursiva que recorre las carpetas extrayendo los archivos .md
const readDirectory = (absolutePath) => {
	if (path.extname(absolutePath) === "") { // base case
	  // Si es un directorio...
	  let directory = []; // Declaro variable que va a contener los directorios
	  directory = fs.readdirSync(absolutePath); // Método que lista el contenido del directorio, guarda los objetos como array en la variable creada
	  directory.forEach((filesList) => {
		// forEach recorre el array recibido por directory, parámetro un string de la lista de archivos?
		filesList = path.join(absolutePath, filesList); // Método que crea un listado de string de los archivos.
		if (path.extname(filesList) === "") {
		  // Si la extensión es vacía, es un directorio y vuelve a correr la función readDirectory, comenzando de nuevo.
		  readDirectory(filesList);
		} else if (path.extname(filesList) === ".md") {
		  // si la extensión es .md guarda el elemento en la variable creada al inicio
		  arrayMarkFile.push(filesList);
		}
	  });
	} else if (path.extname(absolutePath) == ".md") {
	  arrayMarkFile.push(absolutePath);
	}
	return arrayMarkFile;
  };
  readDirectory(route);
  console.log(arrayMarkFile);

// ***Metodo de fs que lee el contenido de un archivo de texto
fs.readFile(route, "utf-8", (error, data) => {
  if (!error) {
    console.log(data);
  } else {
    console.log(`Algo no funciona: ${error}`);
  }
});
