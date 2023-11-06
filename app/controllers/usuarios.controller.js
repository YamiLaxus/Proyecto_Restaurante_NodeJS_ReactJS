const { text } = require('express');
const pool = require('../config/db');

const createUser = async (req, res, next) => {
    const { nombre, apellido, nit, usuario, email, password, img_profile, rol_id } = req.body;
    try {
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
    } catch (error) {
        next(error);
    }
}

const getAllUsers = async (req, res, next) => {
    try {
        const allUsers = await pool.query('SELECT u.usuario_id, u.nombre, u.apellido, u.nit, u.usuario, u.email, u.password, u.img_profile, r.rol_id as rol_id, r.descripcion as rol FROM usuarios u INNER JOIN roles r ON r.rol_id = u.rol_id')
        res.json(allUsers.rows);
    } catch (error) {
        next(error);
    }
}

const getAUser = async (req, res, next) => {
    const { id } = req.params;

    try {
        const result = await pool.query("SELECT u.usuario_id, u.nombre, u.apellido, u.nit, u.usuario, u.email, u.password, u.img_profile, r.rol_id as rol_id, r.descripcion as rol FROM usuarios u INNER JOIN roles r ON r.rol_id = u.rol_id WHERE usuario_id = $1", [id]);

        if (result === 0) {
            res.status(404).json({
                message: "No encontrado",
            });
        }

        return res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
}

const deleteUser = async (req, res, next) => {
    const { id } = req.params;

    try {
        const result = await pool.query("DELETE * FROM usuarios WHERE menu_id = $1", [id]);

        if (result === 0) {
            return res.status(404).json({
                message: "Dato no encontrado",
            });
        }

        return res.sendStatus(202);
    } catch (error) {
        next(error);
    }
}


const updateUser = async (req, res, next) => {
    const { id } = req.params;
    const { nombre, apellido, nit, usuario, email, password, img_profile, rol_id } = req.body;
    try {
        const result = await pool.query("UPDATE usuarios SET nombre = $1, apellido = $2, nit = $3, usuario = $4, email = $5, password = $6, img_profile = $7, rol_id = $8 WHERE menu_id = $9",
            [nombre, apellido, nit, usuario, email, password, img_profile, rol_id]);

        if (result === 0) {
            return res.status(404).json({
                message: "Error no se pudo actualizar",
            });
        }

        return res.status(202);
    } catch (error) {
        next(error);
    }
};

// const userLogin = async (req, res, next) => {
//     const { usuario, password } = req.query; // Cambiar req.params a req.query

//     try {
//         const result = await pool.query("SELECT u.usuario_id, u.nombre, u.apellido, u.nit, u.usuario, u.email, u.password, u.img_profile, r.rol_id as rol_id, r.descripcion as rol FROM usuarios u INNER JOIN roles r ON r.rol_id = u.rol_id WHERE usuario = $1", [usuario]);

//         if (result.rows.length === 0) { // Cambiar result a result.rows.length
//             return res.status(404).json({ message: 'Usuario no encontrado' });
//         }

//         const user = result.rows[0];

//         if (password !== user.password) {
//             return res.status(401).json({ message: 'Contraseña incorrecta' });
//         }

//         res.status(200).json({ message: 'Inicio de sesión exitoso' });
//     } catch (error) {
//         next(error);
//     }
// };


const userLogin = async (req, res, next) => {
    const { email, password } = req.query;

    try {
        const result = await pool.query(
            "SELECT u.usuario_id, u.nombre, u.apellido, u.nit, u.usuario, u.email, u.password, u.img_profile, r.rol_id as rol_id, r.descripcion as rol FROM usuarios u INNER JOIN roles r ON r.rol_id = u.rol_id WHERE email = $1 AND password = $2",
            [email, password]
        );

        if (result.rows.length === 0) {
            return res.status(401).json({ message: 'Email or password is incorrect' });
        }

        const user = result.rows[0];

        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
};



module.exports = {
    getAllUsers,
    createUser,
    getAUser,
    deleteUser,
    updateUser,
    userLogin
}