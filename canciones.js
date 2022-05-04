var express = require('express');
var router = express.Router(); 
var path = require('path');

router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname,'public','canciones_ar.html'));

  });

router.get('/descarga', function (req, res) {
    res.download(path.join(__dirname,'public','files',  req.query.banda ),req.query.banda,
        function(err){
            if (err)
                console.log('Ocurrio un error en la descarga.');
            else
                console.log('Descarga exitosa.');
        });
        console.log(req.query.banda);
});


router.post('/', function (req, res) {
    res.send('Respuesta a POST!');
  });  

router.put('/', function (req, res) {
    res.send('Respuesta a PUT!');
  });

router.delete('/', function (req, res) {
    res.send('Respuesta a DELETE!');
  });    
module.exports = router;