const { isMdFile } = require("./mdFiles");
const { readAll } = require("./mdSearchLinks");
const { pathAbsoluteExists } = require("./mdPathAbsolute");
const { validateHttp} = require("./validateHttp");
const terminal = process.argv[2];

const mdLinks = (path, options = { validate: false }) => {
	return new Promise((resolve, reject) => {
	  const absolutePath = pathAbsoluteExists(path);
	  const mdFiles = isMdFile(absolutePath);
	  if (options.validate === true){
	  Promise.all(readAll(mdFiles))
	  .then(response => resolve(response))
	  } else {
		Promise.all(readAll(mdFiles))
		.then(response => validateHttp(response))
		.then(respValidate => resolve(respValidate)) // Encadenamiento de promesas
	  }
	});
  };
  mdLinks(terminal)
	.then((rest) => console.log('respuesta mdLinks: ', rest))
	.catch((err) => console.log(err));

// Se rompe en el foreach de mdSearchLinks linea 14 cuando hay un archivo md sin links