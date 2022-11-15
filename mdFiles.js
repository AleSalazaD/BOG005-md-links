const path = require('path');
const fs = require('fs');
const terminal = process.argv;

// Si la ruta es un archivo...
fs.readFile(route, "utf-8", (error, data) => {
  if (!error) {
    console.log(data);
  } else {
    console.log(`Algo no funciona: ${error}`);
  }
});

// **********Función recursiva que recorre las carpetas extrayendo los archivos .md**********
let arrayMarkFile = []; 

const readDirectory = (absolutePath) => {
	if (path.extname('absolutePath') === "") { // base case. True, es un directorio.
	  let directory = fs.readdirSync(absolutePath);  // lee dentro del directorio
	  directory.forEach((filesList) => { // Recorre cada directorio y archivo dentro de directory
		filesList = path.join(absolutePath, filesList);
		if (path.extname(filesList) === "") {
		  readDirectory(filesList);
		} else if (path.extname(filesList) === ".md") {
		  arrayMarkFile.push(filesList);
		}
	  });
	} else if (path.extname(absolutePath) == ".md") {
	  arrayMarkFile.push(absolutePath);
	}
  
	return arrayMarkFile;
  };
  readDirectory(terminal[2]);
  console.log(arrayMarkFile);

  module.exports = { readDirectory, };

