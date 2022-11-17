const path = require("path");
const fs = require("fs");
const terminal = process.argv;

let arrayMarkFile = [];
const isMdFile = (route) => {
  fs.stat(route, (err, stats) => {
    if (err) throw err;
    if (stats.isFile() && path.extname(route) === ".md") {
      arrayMarkFile = route;
      console.log("This is an .md file", route);
    } else {
      const readDirectory = (absolutePath) => {
        if (path.extname("absolutePath") === "") {
          // base case. True, es un directorio.
          let directory = fs.readdirSync(absolutePath); // lee dentro del directorio
          directory.forEach((filesList) => {
            // Recorre cada directorio y archivo dentro de directory
            filesList = path.join(absolutePath, filesList); // Hace un join con cada archivo encontrado en los directorios. Lo guarda en fileList.
            if (path.extname(filesList) === "") {
              // Analiza si cada archivo en fileList es otro directorio o es un archivo .md
              readDirectory(filesList); // Si es directorio, vuelve a correr la funcion inicial
            } else if (path.extname(filesList) === ".md") {
              arrayMarkFile.push(filesList); // si es un archivo .md, lo pushea en fileList.
            }
          });
        } else if (path.extname(absolutePath) === ".md") {
          arrayMarkFile.push(absolutePath);
        }
        console.log(arrayMarkFile);
        return arrayMarkFile;
      };
      
      readDirectory(terminal[2]);
    }
  });
};
isMdFile(terminal[2]);

module.exports = { isMdFile }
