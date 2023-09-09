module.exports = (sequelize, Sequelize) => {
    const Categoria = sequelize.define("categorias", {
        nombre: {
            type: Sequelize.STRING
        },
        descripcion: {
            type: Sequelize.STRING
        }
    });

    return Categoria;
};