const { totalUniqueLinks } = require("./linkState");
const { mdLinks } = require('./index');
const terminal = process.argv[2];

// mdLinks(path, options = {validate: true}) => {
//     return new Promise.all((resolve, reject) => {
//     .then((res) => totalUniqueLinks(res))
//     .then(res => console.log('Link status: ', res))
//     .catch((err) => err)
//     })
//   }