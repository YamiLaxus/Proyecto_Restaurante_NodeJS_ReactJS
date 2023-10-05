const { Model } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Categoria = sequelize.define("categorias", {
        titulo: {
            type: Sequelize.STRING
        },
        imagen: {
            type: Sequelize.STRING
        },
        descripcion: {
            type: Sequelize.STRING
        }
    });

    Categoria.associate = (models) => {
        Categoria.hasMany(models.menus.model.js, {
            foreignKey: 'categoriaId',
            as: 'comidas'
        });
    };

    return Categoria;
};