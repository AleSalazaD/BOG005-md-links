const { Console } = require('console');
const fs = require('fs');
const path = require('node:path');

//TO DO:
// Cómo sé si una ruta es absoluta ===> método isAbsolut() para resolverla método resolve()
//cómo leo los archivos dentro de carpetas
//cómo discrimino los links dentro de esos archivos
// Crear objeto de links
// cómo unir dos rutas y para qué ===> método join()
// Recursividad!!
console.log(process.argv)

let isItAbsolute = path.isAbsolute('test/md-links.spec.js'); // ***Determina si una ruta es absoluta. Devuelve un booleano.
console.log(isItAbsolute);

// ***Condicional si la ruta no es absoluta.
if(isItAbsolute == false){
   const absolutePath = path.resolve('test/md-links.spec.js'); // ***Metodo de path que convierte una ruta relativa en una ruta absoluta.
    console.log(absolutePath);
}
/*****************EJEMPLO****************************/
// function pathAbsolute(route){
//     let isItAbsolute = path.isAbsolute(route)
//     if(isItAbsolute == false){
//         const absolutePath = path.resolve(route); 
//          console.log(absolutePath);
//      }
// }
// pathAbsolute('test/md-links.spec.js')

// ***Metodo de fs que lista los archivos y carpetas de un directorio
fs.readdir('D:/Programacion/LABORATORIA', (error, archivos) => {
    archivos.forEach((archivo) => {
        if (!error){
        console.log(archivo);
        }else {
            console.log(`Algo no funciona: ${error}`);
        }
    })
})

// ***Metodo de path que devuelve la extension de un archivo.
const extension = path.extname('README.md')
console.log(extension);

// ***Metodo de fs que lee el contenido de un archivo de texto
fs.readFile('./data1.txt' , 'utf-8', (error, data) => {
    if (!error) {
        console.log(data);
    } else {
        console.log(`Algo no funciona: ${error}`);
    }
})
