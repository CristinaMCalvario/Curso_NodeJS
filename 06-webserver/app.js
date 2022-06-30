require('dotenv').config();
const express = require('express')
const hbs = require('hbs');

const app = express()
const  port = process.env.PORT; 

//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//servir contenido estatico
app.use( express.static('public') );

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Mar Calvario',
        titulo: 'Curso de Node'
    });
  });

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Mar Calvario',
        titulo: 'Curso de Node'
    });
  });

  app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Mar Calvario',
        titulo: 'Curso de Node'
    });
  });

  app.get('/index', (req, res) => {
    res.sendFile( __dirname + '/public/index.html')
  });

app.get('*', (req, res) => {
    res.send('404 | Page not found')
  });

  app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
});
//app.listen(8080)





