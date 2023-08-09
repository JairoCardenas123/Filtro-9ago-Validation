const Centro = require('../models/Centro.js')
const response = require('express')

const postCentro = async(req,res = response)=>{

    const camper = new Centro(req.body);
        
    try {
        const newcamper = await camper.save();
        res.json(newcamper);

    } catch (error) {
        console.log(error);
    }
}


const obtainCentro = async (req,res = response)=>{
    try {
        const centro= await Centro.find();
        res.json(centro)

    } catch (error) {
        console.log("error");
    }
}


module.exports = {
    obtainCentro,
    postCentro
}
