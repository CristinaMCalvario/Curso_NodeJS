import 'dotenv/config' //


import color from 'color';
import { inquirerMenu,
         leerInput, 
         pausa,
        listarLugares } from './helpers/inquirer.js';
import { Busquedas } from './models/busquedas.js';

//console.log(process.env.MAPBOX_KEY);

const main = async() =>{
    const busquedas = new Busquedas();
    let opt;
    //busquedas
    do {
        opt = await inquirerMenu();
        //console.log({opt});

        switch (opt) {
            case 1:
                //MOstrar mensaje 
                const termino = await leerInput('Ciudad: ');
                //buscar los lugares
                const lugares = await busquedas.ciudad(termino);
                //Seleccionar el lugar
                const id = await listarLugares(lugares);
                if (id === '0') continue;
                const lugarSel = lugares.find(l => l.id === id);
                //Guardar en BD
                busquedas.agregarHistorial(lugarSel.nombre);
                //console.log(lugarSel);

                //Clima
                const clima =await busquedas.climaLugar(lugarSel.lat, lugarSel.lng);
                //console.log(clima);
                //MOstrar resultados
                console.clear();
                console.log(`\nInformación de la Ciudad\n`.magenta);
                console.log('Ciudad: ', lugarSel.nombre.magenta);
                console.log('Lat: ', lugarSel.lat);
                console.log('Lng: ', lugarSel.lng);
                console.log('Temperatura: ', clima.temp);
                console.log('Mínima: ', clima.min);
                console.log('Máxima: ', clima.max);
                console.log('Cómo esta el clima: ', clima.desc.magenta);
                break;
        
            case 2:

                busquedas.historialCapitalizado.forEach((lugar,i)=>{
                    const idx = `${i + 1}.`.magenta;
                    console.log(`${idx} ${lugar}`);
                })
                break;
        }//switch

        if (opt !== 0) await pausa();

    } while (opt !== 0);




}
main();

