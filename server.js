var canciones = require('./canciones')
var express = require('express');
var path = require('path');
var app = express();


app.listen(3000, function () { //escucha en el puerto 3000
  console.log('App escuchando en puerto 3000!');
});



app.use('/canciones', canciones);

//HTML principal de server.js
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname,'public','index.html'));
});

app.get('/acerca', function (req, res) {
  res.sendFile(path.join(__dirname,'public','acerca.html'));
});


app.use(function(req, res, next) {
  res.status(404).send('Esa pagina no existe!');
});