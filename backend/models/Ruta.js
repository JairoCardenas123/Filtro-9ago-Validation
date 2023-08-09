const {Schema, model} = require('mongoose')

const rutaSchema = Schema({
    nombre:{
        type:String,
        required:true,
        trim:true
    },
    ruta:{
        type:String,
        required:true,
        trim:true
    }
    }
)

module.exports = model("Rutas", rutaSchema, "Rutas")