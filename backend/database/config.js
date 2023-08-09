const mongoose = require('mongoose');

const dbConnection = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Te conectaste, pero es apenas el principio');
    } catch (error) {
        console.log(error);
        throw new Error('No se pudo compa');
    }
}

module.exports = {
    dbConnection
}