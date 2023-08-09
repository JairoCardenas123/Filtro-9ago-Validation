const Camper = require('../models/Camper.js')
const { response } = require('express');


const postCamper = async(req,res = response)=>{

    const camper = new Camper(req.body);
        
    try {
        const newcamper = await camper.save();
        res.json(newcamper);

    } catch (error) {
        console.log(error);
    }
}

const delCamper = async(req, res =response ) => {

    const { id } = req.params;
    const camperEliminada = await Camper.findByIdAndUpdate( id, { estado: false }, {new: true });

    res.json( camperEliminada );
}


/*         const nombre = req.body.nombre.toUpperCase();
    
        const camperDB = await Camper.findOne({ nombre });
    
        if ( camperDB ) {
            return res.status(400).json({
                msg: `La camper ${ camperDB.nombre }, ya existe`
            });
        }
        const data = {
            nombre,
            password: req.password._id
        }
    
        
        const camper = new Camper( data );
    
        await camper.save();
    
        res.status(201).json(camper); */
    
    

/*     const insertcamper= async(req,res)=>{
        const camper = new campers(req.body);
        
        try {
            const newcamper = await camper.save();
            res.json(newcamper);
    
        } catch (error) {
            console.log(error);
        }
    }
     */


const obtainCamper = async (req,res = response)=>{
    try {
        const camper= await Camper.find();
        res.json(camper)

    } catch (error) {
        console.log("error");
    }
}


module.exports = {
    obtainCamper,
    postCamper,
    delCamper
}


/* const obtainCamper = async(req, res = response ) => {
    const { id } = req.params;
    const camper = await Camper.findById( id )
    const camperResults = await Camper.find()
    .populate('campers', 'nombre');
    res.json( camper );
    res.json(camperResults)
} */
