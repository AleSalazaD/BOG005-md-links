const fs = require('fs');
const path = require('node:path');

//TO DO:
//cómo leo los archivos dentro de carpetas
//cómo discrimino los links dentro de esos archivos
// cómo unir dos rutas y para qué
// Recursividad!!
// Promesa + callback


// ***Metodo de path que devuelve la extension de un archivo.
const extension = path.extname('README.md')
console.log(extension);

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

// ***Metodo de fs que lee el contenido de un archivo de texto
fs.readFile('./data1.txt' , 'utf-8', (error, data) => {
    if (!error) {
        console.log(data);
    } else {
        console.log(`Algo no funciona: ${error}`);
    }
})