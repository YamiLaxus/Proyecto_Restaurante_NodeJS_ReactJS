module.exports = (sequelize, Sequelize) => {
    const Rol = sequelize.define("roles", {
        desctipcion: {
            type: Sequelize.STRING
        }
    });

    return Rol;
};