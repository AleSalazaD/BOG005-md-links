const { mdLinks } = require('./index');
const terminal = process.argv[2];


const totalUniqueLinks = (rest) => {
    let totalLinks = 0;
    let uniqueLinks = [];
    rest.forEach(obj => {
        totalLinks += obj.length;
        uniqueLinks = uniqueLinks.concat(obj);
    });

uniqueLinks = new Set(uniqueLinks.map((element) => element.href)) // Crea una coleccion de links unicos.
const stats = `${('Total :')} ${(totalLinks)}\n${('Unique :')} ${(uniqueLinks.size)}`;
console.log(stats);
}

module.exports = { totalUniqueLinks,
}