const { isMdFile } = require("./mdFiles");
const { pathAbsoluteExists } = require("./mdPathAbsolute");
const { linkCatcher } = require("./mdSearchLinks");
const { validateHttp } = require("./validateHttp");
const terminal = process.argv[2];

const mdLinks = (path, options = { validate: false }) => {
  return new Promise((resolve, reject) => {
    const absolutePath = pathAbsoluteExists(path);
    const mdFiles = isMdFile(absolutePath);
    if (options.validate === false) {
      Promise.all(linkCatcher(mdFiles))
			.then((response) => validateHttp(response))
			.then(respValidate => resolve(respValidate)) // Encadenamiento de promesas
    } else {
      Promise.all(linkCatcher(mdFiles))
        .then((respValidate) => resolve(respValidate)); 
    }
  })
}

mdLinks(terminal)
  .then((rest) => console.log("respuesta mdLinks: ", rest))
  .catch((err) => console.log(err));


  module.exports = {mdLinks,
  }


// Se rompe en el foreach de mdSearchLinks linea 14 cuando hay un archivo md sin links
// No valida los links.
