

const soketController = (socket) => {
    console.log('Cliente conectado', socket.id);

    socket.on('disconnect', () => {
        //console.log('Cliente desconectado', socket.id);
    });

    socket.on('enviar-mensaje', (payload, callback) =>{
        
        const id = 123456;
        callback(id); 
        //callback({id, fecha: new Date().getTime()});

        socket.broadcast.emit('enviar-mensaje', payload);
        //console.log(payload);
    });
}

module.exports = {
    soketController
}