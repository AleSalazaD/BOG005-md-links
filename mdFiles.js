const path = require('path');
const fs = require('fs');
const terminal = process.argv[2];

// **********Función recursiva que recorre las carpetas extrayendo los archivos .md**********

const isMdFile = (route) => {
  let arrayMarkFile = [];
  const stats = fs.statSync(route)
  if (stats.isFile() && path.extname(route) === ".md") {
    arrayMarkFile.push(route)
    console.log("This is an .md file", route);
  } else {
    if (path.extname(route) === "") {
      // base case. True, es un directorio.
      let directory = fs.readdirSync(route); // lee dentro del directorio
      directory.forEach((filesList) => {
        // Recorre cada directorio y archivo dentro de directory
        filesList = path.join(route, filesList); // Hace un join con cada archivo encontrado en los directorios. Lo guarda en fileList.
        if (path.extname(filesList) === "") {
          // Analiza si cada archivo en fileList es otro directorio o es un archivo .md
          arrayMarkFile = arrayMarkFile.concat(isMdFile(filesList))
        } else if (path.extname(filesList) === ".md") {
          arrayMarkFile.push(filesList); // si es un archivo .md, lo pushea en fileList.
        }
      });
    } else if (path.extname(route) === ".md") {
      arrayMarkFile.push(route);
    }
    return arrayMarkFile;
  }
};
console.log(isMdFile(terminal));

module.exports = { isMdFile, };
