const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de tabla de multiplicar'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        demandOption: true,
        default: 10,
        describe: 'Es el limite'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: true,
        describe: 'Muestra la tabla'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
          throw 'La base tiene que ser un número'
        }
          return true // tell Yargs that the arguments passed the check
        
      })
    .argv;

    module.exports = argv;