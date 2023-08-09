const {Schema, model} = require('mongoose')

const camperSchema = Schema({
    nombre:{
        type:String,
        required: [true, 'El nombre es obligatorio'],
        unique: true
    },
    tipoIdentificacion:{
        type:String,
        required:true,  
        unique: true
    },
    NroIdentificacion:{
        type:String,
        required:false,
        unique: true
    },
    email:{
        type:String,
        required: true, 
        unique: true
    },
    password:{
        type:String,
        required: true, 
        unique: true
    },
    level:{
        type:String,
        required: true, 
        unique: true
    },
    estado:{
        type:String,
        required:true, 
        unique: true
    },
    imagen:{
        type:String,
        required: true, 
        unique: true
    },
    rol:{
        type:String,
        required:true,
        unique:true
    },
    promedio:{
        type:String,
        required: true, 
        unique: true
    },

}
)

module.exports = model("campers", camperSchema, "campers")
