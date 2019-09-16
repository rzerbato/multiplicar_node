const argv = require('./config/yargs').argv;
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const colors = require('colors/safe');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(colors.yellow(`Archivo creado: `), colors.red(archivo)))
            .catch(e => console.log(e));

        break;
    default:
        console.log('Comando no reconocido');
}

//let argv2 = process.argv;
/*let parametro = argv[2];
let base = parametro.split('=')[1];
*/

//console.log('limite', argv.limite);