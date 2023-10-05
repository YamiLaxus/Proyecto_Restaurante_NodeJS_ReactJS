module.exports = (sequelize, Sequelize) => {
    const Categoria = './models/categorias.model.js';
    const Menu = sequelize.define("menus", {
        nombre: {
            type: Sequelize.STRING
        },
        descripcion: {
            type: Sequelize.STRING
        },
        precio: {
            type: Sequelize.STRING
        },
        estado: {
            type: Sequelize.STRING
        },
        imagen: {
            type: Sequelize.STRING
        },
        categoriaId: {
            type: Sequelize.STRING
        }

    });

    Menu.associate = (models) => {
        Menu.belong(Categoria, {
            foreignKey: 'categoriaId',
            onDelete: 'CASCADE',
        });
    };

    return Menu;
};