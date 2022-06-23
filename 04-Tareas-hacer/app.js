import { inquirerMenu, pausa, leerInput,
         listadoTareasBorrar,
         confirmar,
        mostrarListadoChecklist } from './helpers/inquirer.js';
import { Tarea } from './models/tarea.js';
import colors from 'colors';
import { Tareas } from './models/tareas.js';
import { guardarDB, leerDB } from './helpers/guardarArchivo.js';
//console.clear();

const main = async()=>{
    //console.log('Hola Mundo');
    let opt='';
    const tareas =  new Tareas();

    const tareasDB = leerDB();

    if (tareasDB) {
        tareas.cargarTareasFromArray( tareasDB );
    }
    //await pausa();
    
    do {// Imprimir menu
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                // crear opcion
                const desc = await leerInput('Descripción:');
                console.log(desc);
                tareas.crearTarea( desc );
            break;

            case '2':
                //console.log(tareas.listadoArr);
                tareas.listadoCompleto();
            break;
            case '3': // listar completadas
                tareas.listarPendientesCompletadas(true);
            break;

            case '4': // listar pendientes
                tareas.listarPendientesCompletadas(false);
            break;
            case '5': // completado | pendiente
            const ids = await mostrarListadoChecklist( tareas.listadoArr );
            tareas.toggleCompletadas( ids );
            break;
                    
            case '6': // Borrar
                const id = await listadoTareasBorrar( tareas.listadoArr );
                if ( id !== '0' ) {
                    const ok = await confirmar('¿Está seguro?');
                    if ( ok ) {
                        tareas.borrarTarea( id );
                        console.log('Tarea borrada');
                    }
                }
            break;
        }//swich
        
        guardarDB(tareas.listadoArr);

        await pausa();

    } while (opt !== '0');
}
main();

