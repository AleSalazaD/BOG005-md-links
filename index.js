const { isMdFile } = require("./mdFiles");
const { pathAbsoluteExists } = require("./mdPathAbsolute");
const { linkCatcher } = require("./mdSearchLinks");
const { validateHttp } = require("./validateHttp");
const terminal = process.argv[2];

const mdLinks = (path, options = { validate: false }) => {
  return new Promise((resolve, reject) => {
    const absolutePath = pathAbsoluteExists(path);
    const mdFiles = isMdFile(absolutePath);
    if (options.validate === true) {
      Promise.all(linkCatcher(mdFiles))
			.then((response) => validateHttp(response.flat()))
			.then(respValidate => resolve(respValidate)) // Encadenamiento de promesas
    } else {
      Promise.all(linkCatcher(mdFiles))
        .then((resp) => resolve(resp.flat())); 
    }
    reject;
  })
}

mdLinks(terminal, {validate: true}) // se lleva al CLI
  .then((rest) => console.log("respuesta mdLinks: ", rest))
  .catch((err) => err.message)

  
  module.exports = { mdLinks }


// Se rompe en el foreach de mdSearchLinks linea 14 cuando hay un archivo md sin links
// Se rompe si recibe un archivo y no una carpeta
