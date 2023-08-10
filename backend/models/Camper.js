const {Schema, model} = require('mongoose')

const camperSchema = Schema({
    nombre:{
        type:String,
        required: [true, 'Name is required']
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
        required: [true, 'Email is required'],
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    level:{
        type:String,
        required: true, 
        unique: true
    },
    estado:{
        type:Boolean,
        default: true
    },
    googleSignIn :{
        type:Boolean,
        default: true
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
