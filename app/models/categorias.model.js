module.exports = (sequelize, Sequelize) => {
    const Categoria = sequelize.define("categorias", {
        titulo: {
            type: Sequelize.STRING
        },
        descripcion: {
            type: Sequelize.STRING
        }
    });

    return Categoria;
};