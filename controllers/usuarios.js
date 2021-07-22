const { response, request } = require('express');

const usuariosGet = (req = request, res = response ) => {

    const { q, nombre = "No name", apikey, page = 1, limit } = req.query;

    res.status(200).json({
        msg: 'get API - controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    })
}

usuariosPost = (req, res) => {

    const { nombre, edad } = req.body;

    res.status(201).json({
        msg: 'post API - controlador',
        nombre,
        edad
    })
};

usuariosPut = (req, res) => {

    const { id } = req.params;
    res.status(400).json({
        msg: 'put API - controlador',
        id
    })
};

usuariosPatch = (req, res) => {
    res.status(200).json({
        msg: 'delete API - controlador'
    })
};

usuariosDelete = (req, res) => {
    res.status(200).json({
        msg: 'patch API - controlador'
    })
};


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete,
}