const { text } = require('express');
const pool = require('../config/db');

const getAllMenus = async (req, res, next) => {
    try {
        const allMenus = await pool.query('SELECT m.menu_id, m.nombre, m.descripcion, m.precio, m.imagen, e.titulo as estado, c.titulo as categoria FROM menus m INNER JOIN estados e ON e.estado_id = m.estado_id INNER JOIN prod_categorias c ON c.categoria_id = m.categoria_id');
        res.json(allMenus.rows);
    } catch (error) {
        next(error);
    }
}

const getAMenu = async (req, res, next) => {
    const { id } = req.params;

    try {
        const result = await pool.query("SELECT m.menu_id, m.nombre, m.descripcion, m.precio, m.imagen, e.titulo as estado, c.titulo as categoria FROM menus m INNER JOIN estados e ON e.estado_id = m.estado_id INNER JOIN prod_categorias c ON c.categoria_id = m.categoria_id WHERE menu_id = $1", [id]);

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

const createMenu = async (req, res, next) => {
    const { nombre, descripcion, imagen, precio, estado_id, categoria_id } = req.body;

    try {
        const result = await pool.query("INSERT INTO menus(nombre, descripcion, precio, imagen, estado_id, categoria_id) VALUES($1, $2, $3, $4, $5, $6) RETURNING *", [
            nombre,
            descripcion,
            precio,
            imagen,
            estado_id,
            categoria_id
        ]);
        res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
}

const deleteMenu = async (req, res, next) => {
    const { id } = req.params;

    try {
        const result = await pool.query("DELETE * FROM menus WHERE menu_id = $1", [id]);

        if (result === 0) {
            return res.status(404).json({
                message: "Menu no encontrado",
            });
        }

        return res.sendStatus(202);
    } catch (error) {
        next(error);
    }
}

const updateMenu = async (req, res, next) => {
    const { id } = req.params;
    const { nombre, descripcion, imagen, precio, estado_id, categoria_id } = req.body;
    try {
        const result = await pool.query("UPDATE menus SET nombre = $1, descripcion = $2, imagen = $3, precio = $4, estado_id = $5, categoria_id = $6 WHERE menu_id = $6",
            [nombre, descripcion, imagen, precio, estado_id, categoria_id]);

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

module.exports = {
    getAllMenus,
    createMenu,
    deleteMenu,
    updateMenu,
    getAMenu
}