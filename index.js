const { isMdFile } = require("./mdFiles");
const { readAll } = require("./mdSearchLinks");
const { pathAbsoluteExists } = require("./mdPathAbsolute");
const terminal = process.argv[2];

const mdLinks = (path, options = { validate: false }) => {
	return new Promise((resolve, reject) => {
	  const absolutePath = pathAbsoluteExists(path);
	  const mdFiles = isMdFile(absolutePath);
	  Promise.all(readAll(mdFiles))
	  .then(response => resolve(response))
	});
  };
  mdLinks(terminal)
	.then((rest) => console.log('respuesta mdLinks: ', rest))
	.catch((err) => console.log(err));
	