const {Schema, model} = require('mongoose')

const levelSchema = Schema({
    nombre:{
        type:String,
        required:true,
        trim:true
    },
    ruta:{
        type:String,
        required:true,
        trim:true
    },
    duracion:{
        type:String,
        required:true,
        trim:true
    },
    }
)

module.exports = model("Levels", levelSchema, "Levels")