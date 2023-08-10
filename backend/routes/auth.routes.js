/* 3.Importamos Router de express (auth)*/
const {Router} = require('express');
/* 4.Importamps Check de espress-validator (auth) */
const {check} = require ('express-validator');

/* 11.Importamos la funcion login del controlador */
const { login } = require('../controllers/auth.controllers.js');
/* 15.Llamamos al validateDocuments de los middlewares */
const { validateDocuments } = require('../middlewares/validate.documents.js');

/* 5.Pasamos el potencial del Router a una constante */
const router = Router();

/* 6.Metodo HTTP Post */ //pasamos a crear el controlador
router.post("/login",[ //13.Agregamos el check 
    check('email','Email is required').isEmail(), //14. 'email'= debe estar en la base de datos como llave  
    check('password','Password is required').not().isEmpty(),//15. 'check al password, 'password'= debe estar en la base de datos //vamos al controlador 
    validateDocuments //16.Lo llamamos para que funcione el check
], login );


module.exports = router;