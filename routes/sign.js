/**
 * Created by anibal on 16/01/2017.
 */
var express = require('express');
var registro = express.Router();

/* GET home page. */
registro.get('/', function(req, res, next) {
    res.render('user/registro', { title: 'Registrar' });
});

module.exports = registro;
