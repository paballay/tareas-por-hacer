const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');
let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear( argv.descripcion );
        porHacer.guardarDB();

        break;
    case 'listar':
        let listado = porHacer.listado();

        if(listado === []){
            throw new Error('No hay tareas por hacer');
        }else{
            console.log('========== TAREAS POR HACER =========='.green);
            for ( let i = 0; i < listado.length; i++ ){ // for ( let i of listado )
                if(i >= 1){
                    console.log('--------------------------');
                }
                console.log('Descripción: ', listado[i].descripcion);
                console.log('Estado: ', listado[i].completado);
            }
            console.log('============ ============ ============'.green);
        }

        break;
    case 'actualizar':
        porHacer.actualizar(argv.descripcion, argv.completado)

        break;

    case 'borrar':
        porHacer.borrar(argv.descripcion);

        break;
    default:
        console.log('Comando no reconocido');
}