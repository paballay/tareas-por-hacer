const descripcion = {
    alias: 'd',
    demand: true,
    desc: 'Descripción de la tarea por hacer',
}

const completado = {
    alias: 'c',
    default: true,
    desc: 'Descripción de la tarea si esta completa o no',
}

const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', {
        descripcion
    })
    .command('actualizar','Actualiza el estado completado de una tarea', {
        descripcion,
        completado,
    })
    .command('listar', 'Lista todas las tareas')
    .command('borrar', 'Borrar una tarea de la lista', {
        descripcion,
    })
    .help()
    .argv;

module.exports = {
    argv,
}