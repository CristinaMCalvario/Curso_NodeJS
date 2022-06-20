
const { crearArchivo } = require('../helpers/multiplicar');
const colors = require('colors');
const argv = require('../config/yargs');


console.clear();

//console.log(argv);

crearArchivo(argv.b, argv.l,argv.h)
   .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
   .catch(err => console.log(err));
//console.log(process.argv);
//console.log(argv);
//console.log()

//const base = 9;

//crearArchivo(base)
 //   .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
  //  .catch(err => console.log(err));


/*console.log("**********************");
console.log(`****Tabla del ${base}****`);
console.log("**********************");

let salida = '';
for (let i = 1; i <= 10; i++) {
    salida += `${base} x ${i} = ${base*i}\n`;
}
console.log(salida);*/
//fs.writeFileSync()
/*fs.writeFile(`tabla-${base}.txt`,salida,(err) => {
    if (err) throw err;

    console.log(`tabla-${base}.txt creado`);
})*/
//fs.writeFileSync(`tabla-${base}.txt`,salida);
//console.log(`tabla-${base}.txt creado`);