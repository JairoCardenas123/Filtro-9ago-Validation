const {Schema,model} = require('mongoose')

const CentroSchema = Schema({
    nombre:{
        type:String,
        required:[true,'El nombre es obligatorio'],
        unique:true
    },
    estado:{
        type:Boolean,
        default:true,
        required:true    
    },

})


module.exports = model('centros',CentroSchema)