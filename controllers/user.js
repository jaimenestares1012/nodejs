const { respose } = require('express')

const usuariosGet = (req , res = respose)=>{
    const {q, nombre }= req.query
    res.json({
        "prueba": "get - controller",
        q,
        nombre,
    })
}

const usuariosPost =(req, res)=>{
    const {nombre, edad} = req.body
    res.json({
        "prueba": "POST - CONTROLLER",
        nombre,
        edad,
    })
}


const usuariosPut =(req, res)=>{
    const {id} = req.params
    res.json({
        "prueba": "PUT - CONTROLLER",
        id
    })
}



const usuariosDelete =(req, res)=>{
    res.json({
        "prueba": "DELETE - CONTROLLER"
    })
}


module.exports ={
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}