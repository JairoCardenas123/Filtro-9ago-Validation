const express = require('express');
const cors = require('cors');
const {dbConnection} = require('../database/config.js');

class Server {

    constructor(){
        this.app = express();
       
        this.port = process.env.PORT

        this.paths = {
            /* 1.paso Auth */
            auth:       '/api/auth',
            centro:       '/api/centro',
            camper: '/api/camper',
            level:   '/api/level',
            ruta:     '/api/ruta',
            role:    '/api/role',
        }

        this.connectDB();
        this.middlewares();
        this.routes();
    }

    async connectDB(){
        await dbConnection();
    }

    middlewares(){
        this.app.use(cors());

        this.app.use(express.json());

        this.app.use(express.static('public'));


    }

    routes(){
        /* 2.Paso Agregar Ruta (auth) */ //pasamos a crear la ruta
        this.app.use(this.paths.auth, require('../routes/auth.routes.js'));
        this.app.use(this.paths.camper, require('../routes/camper.routes.js'));
        this.app.use(this.paths.centro, require('../routes/centro.routes.js'));
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`El server esta pero que se corre: ${this.port}`);
        })
    }

}

module.exports = Server;