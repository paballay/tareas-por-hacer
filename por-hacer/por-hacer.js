const colors = require('colors');
const fs = require('fs');


let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if(err)
            throw new Error('No se pudo grabar')
        else
            console.log('Guardado con éxito'.green);
    });
}

const cargarDB = () => {
    try{
        listadoPorHacer = require('../db/data.json');
    }catch (err){
        listadoPorHacer = [];
    }
}

const crear = descripcion => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push( porHacer );

    return porHacer;
}

const listado = () => {
    // cargarDB();
    // return listadoPorHacer;
    try{
        return listadoPorHacer = require('../db/data.json');
    }catch (err){
        return [];
    }
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();

    let index = listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion);

    if( index >= 0 ) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
    } else {
        throw new Error('Error al actualizar el listado');
    }
}

const borrar = (descripcion) => {
    cargarDB();

    let index = listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion);

    if( index >= 0 ) {
        listadoPorHacer.splice( index, 1 );
        guardarDB();
    } else {
        console.log('Tarea no encontrada'.red);
    }
}

module.exports = {
    crear,
    guardarDB,
    listado,
    actualizar,
    borrar,
}