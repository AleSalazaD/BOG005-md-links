const { Console } = require('console');
const fs = require('fs');
const path = require('node:path');

console.log(process.argv) // Me permite ingresar el path y opciones por consola. Se puede resolver en CLI
 
// *** Metodo para saber si una ruta existe
// ***Método que determina si una ruta es absoluta. Devuelve un booleano.
// ***Condicional si la ruta no es absoluta.
// ***Metodo de path que convierte una ruta relativa en una ruta absoluta.

// ***********************LINKS DE PRUEBA************************************************
const route = './fileTest'; // relative route
// const route = 'D:/Programacion/LABORATORIA/BOG005-md-links/fileTest'; // absolute route
//const route = './fileTest/data.md'
// ***************************************************************************************

if(fs.existsSync(route) == false){
    console.log('La ruta NO EXISTE! SALE DE LA API');
    }else{
    console.log('La ruta SI EXISTE! Corre la función absolute');
    function pathAbsolute(route){
        let isItAbsolute = path.isAbsolute(route);
        if(isItAbsolute == false) {
            const absolutePath = path.resolve(route); 
            route = absolutePath;
            console.log(isItAbsolute);
            console.log(route);
        }else if (isItAbsolute == true) { 
            absolutePath = path;
            console.log(isItAbsolute);
            console.log(route);
        }
    }pathAbsolute(route);
}

// ***Función con método de path que devuelve la extensión de un archivo.
const fileExtension = (route) => path.extname(route) === '.md';
console.log(fileExtension(route));

// ***Metodo de fs que lista los archivos y carpetas de un directorio. Devuelve array de strings.
const filesInDirectory = fs.readdirSync(route);
console.log(filesInDirectory);

// ***Metodo de fs que lee el contenido de un archivo de texto
const fileText = 'fileTest/markdown.md';
fs.readFile(fileText , 'utf-8', (error, data) => {
    if (!error) {
        console.log(data);
    } else {
        console.log(`Algo no funciona: ${error}`);
    }
})
