// const { Console } = require('console');
const fs = require('fs');
const path = require('node:path');

//TO DO:
// cómo organizar el boilerplate
// cómo leer la ruta por consola ===> process.argv resolver en CLI
// cómo sé si la ruta existe ===> método fs.existsSync
// Cómo sé si una ruta es absoluta ===> método isAbsolut() para resolverla método resolve()
//cómo leo los archivos dentro de carpetas ===> con recursividad
//cómo discrimino los links dentro de esos archivos ===>
// Crear objeto de links ===>
// cómo unir dos rutas y para qué ===> método join()

// const route = './fileTest'; // relative route
const route = 'D:/Programacion/LABORATORIA/BOG005-md-links/fileTest'; // absolute route
//const route = './fileTest/data.md'

const filesInDirectory = fs.readdirSync(route);
console.log(filesInDirectory);

// recorrer el array
// identificar cuales elementos son .md
// si es .md, debe guardarlos en una variable como array
// identificar cuales elementos son directorios
// Si es directorio debe entrar al directorio para repetir desde el paso 1

/* const data = fs.readdirSync(route);
let markupArray = [];
let directoryArray = [];
for(i = 0; i < data.length; i++){
    const arrayElements = data[i];
    if (arrayElements.endsWith('.md')) {
        markupArray.push(arrayElements);
        console.log(markupArray);
        console.log(data); */
    // }else if (fs.statSync(arrayElements).isDirectory() === true) {
    //     // directoryArray.push(arrayElements);
    //     console.log('estuvo');
    // }
//}
