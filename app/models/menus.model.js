module.exports = (sequelize, Sequelize) => {
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

    return Menu;
};