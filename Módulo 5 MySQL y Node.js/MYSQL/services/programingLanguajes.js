// Este es el modelo

const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function create(programinLanguajes){

    const resultado = await db.query(`INSERT INTO lenguajes_programacion (nombre, anio_salidaINT, github_rank) VALUES (
            "${programinLanguajes.nombre}",
            "${programinLanguajes.anio_salidaINT}",
            "${programinLanguajes.github_rank}"
        )
    `);
    
    let message = "ERROR al crear el lenguaje de programacion";
    if(resultado.affectedRows){
        message = "El lenguaje se ha creado con éxito";
    }
    return {message};
}




async function read(page=1){
    const offset = helper.getOffset(page, config.listPerPage);
    const rows = await db.query(`SELECT * FROM lenguajes_programacion`);

    const data = helper.emptyRows(rows);

    const metaData = {page};

    return {
        data,
        metaData
    }
}

async function update(id, programinLanguajes){
    const resultado = await db.query(`
        UPDATE lenguajes_programacion
        SET nombre = "${programinLanguajes.nombre}", anio_salidaINT = "${programinLanguajes.anio_salidaINT}", github_rank = "${programinLanguajes.github_rank}" WHERE id="${id}"
    `);
    let message = "ERROR al crear el lenguaje de programacion";
    if(resultado.affectedRows){
        message = "El lenguaje se ha creado con éxito";
    }
    return {message};
}

async function delete1(id){
    const resultado = db.query(
        `DELETE FROM lenguajes_programcion WHERE id="${id}"`
    );

    let message = "ERROR al eliminar el lenguaje de programacion";
    if(resultado.affectedRows){
        message = "El lenguaje se ha eliminado con éxito";
    }
    return {message};
}


module.exports = {
    create,
    read,
    update,
    delete1
}