const { text } = require('express');
const pool = require('../config/db');

const createUser = async (req, res, next) => {
    const {nombre, apellido, nit, usuario, email, password, img_profile, rol_id} = req.body;
    try{
        const result = await pool.query("INSERT INTO usuarios (nombre, apellido, nit, usuario, email, password, img_profile, rol_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *", [
            nombre,
            apellido,
            nit,
            usuario,
            email,
            password,
            img_profile,
            parseInt(rol_id, 10),
        ]);
        res.json(result.rows[0]);
    } catch (error){
        next(error);
    }
}

const getAllUsers = async (req, res, next) => {
    try{
        const allUsers = await pool.query('SELECT u.usuario_id, u.nombre, u.apellido, u.nit, u.usuario, u.email, u.password, u.img_profile, r.rol_id as rol_id, r.descripcion as rol FROM usuarios u INNER JOIN roles r ON r.rol_id = u.rol_id')
        res.json(allUsers.rows);
    }catch(error) {
        next(error);
    }
}

module.exports = {
    getAllUsers,
    createUser
}