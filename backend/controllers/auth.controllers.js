const {response} = require('express');
const Camper = require('../models/Camper.js');
const bcryptjs = require('bcryptjs');
const { generateJWT } = require('../helpers/generate.JWT.js');

const login = async (req, res=response)=>{

    const {email, password} = req.body;
    try {
        const usuario = await Camper.findOne({email});

        if (!usuario){
            return res.status(400).json({
                msg:"Camper no es correcto"
            })
        }
        if (!usuario.estado){
            return res.status(400).json({
                msg:"Estado Inactivo"
            })
        }
        const validPassword = bcryptjs.compareSync(password, usuario.password);
        if (!validPassword){
            return res.status(400).json({
                msg:"Password Incorrecto"
            })
        }
        const token = await generateJWT(usuario.id)

        res.json({
           usuario,
           token
        })
        
    } catch (error) {
        console.log(error);
        return res.json({
            msg:"contacte al servicio tecnico"
        })
    }
}

module.exports = {
    login
}