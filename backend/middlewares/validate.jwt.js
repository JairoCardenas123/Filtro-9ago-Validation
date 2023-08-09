const { response, request } = require('express');
const jwt = require('jsonwebtoken');
const Camper = require('../models/Camper.js');


const validateJWT = async(  req = request, res = response, next) => { 
    const token = req.header('x-api-token-jwt'); 


    
    if ( !token ) { 
        return res.status(401).json({
            msg: 'No hay token en la petición'
        });
    }

    try {
        const {uid} = jwt.verify( token, process.env.SECRET_OR_PRIVATE_KEY );
         const camper = await Camper.findById( uid );
        if( !camper ) {
            return res.status(401).json({
                msg: 'Token no válido - usuario no existe DB'
            })
        } 

         if ( !camper.estado ) {
            return res.status(401).json({
                msg: 'Token no válido - usuario con estado: false'
            })
        } 
        
        req.centro = centro;  
        console.log("req usuario en validate",req.centro);
        next();

    } catch (error) {

        console.log(error);
        res.status(401).json({
            msg: 'Token no válido'
        })
    }
}


module.exports = {
    validateJWT
}