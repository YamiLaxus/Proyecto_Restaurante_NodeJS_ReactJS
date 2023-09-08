module.exports = (sequelize, Sequelize) => {
    const EstadoUsuario = sequelize.define("estado_usuarios", {
        descripcion: {
            type: Sequelize.STRING,
            unique: true
        }
    });

    return EstadoUsuario
};