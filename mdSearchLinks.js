const fs = require('fs');

const readLinks = (route) => {
  // console.log('Read route: ', route);
  return new Promise((resolve, reject) => {
    fs.readFile(route, 'utf-8', (error, data) => {
      const expression = /(?<!!)\[(.*?)\]\((.*?)\)/g;
      const hrefExp = /https?:\/{2}.*?(?=\))/g;
      const textExp = /(?!\[).*(?=\])/g;
      let arrLink = [];
      if (!error) {
        const dataVar = data.match(expression)
        dataVar.forEach((link) => {
          arrLink.push({
            href: link.match(hrefExp).toString(),
            text: link.match(textExp).toString(),
            file: route,
          });
        });
      } else {
        arrLink.push({
          href: 'sorry, not links found',
          text: 'sorry, not links found',
          file: route
        })
      }
      resolve(arrLink);
      // console.log('esto es arrLink', arrLink);
    })
  })
}

// Función que retorna los links contenidos en cada archivo .md
const linkCatcher = (arrMdFiles) => {
  return arrMdFiles.map(mdFile => {
    return readLinks(mdFile)
  });
};
// Promise.all(readAll(['D:\\Programacion\\LABORATORIA\\BOG005-md-links\\fileTest\\me.md']))
// Promise.all(readAll(arr))
 
// .then(response => console.log(response))

module.exports = { linkCatcher, 
};
