require('dotenv').config();
const express = require('express')
const cors = require('cors')



class Server {
    constructor(){
        console.log("en el contructor");
        this.app = express()
        this.port = process.env.PORT 
        this.usuariosPath = '/api/usuarios'

        // MIDDLEWARES
        this.middlewares()


        //rutas de la aplicacion
        this.routes()
    }

    middlewares(){
        // CORS/
        this.app.use( cors() )
        //lectura y parseo del body
        this.app.use( express.json() )
        this.app.use( express.static('public') )
    }
    routes(){
      this.app.use(this.usuariosPath, require('../routes/user'))
    }
    listen(){
        this.app.listen(this.port, ()=>{
            console.log("servidor corriendo en el puerto", process.env.PORT);
        })
    }

}

module.exports = Server;