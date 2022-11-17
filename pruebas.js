const mdLinks = (gatitos) => {
  return new Promise((resolve, reject) => {
    if(gatitos>13){
      resolve('Trece gatitos');
    } else {
      reject('No hay gatitos');
    }
})
}

mdLinks(9)
.then(rest => console.log(rest))
.catch(err => console.log(err))
