module.exports = (sequelize, Sequelize) => {
    const Rol = sequelize.define("roles", {
        descripcion: {
            type: Sequelize.STRING
        }
    });

    return Rol;
};