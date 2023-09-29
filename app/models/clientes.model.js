module.exports = (sequelize, Sequelize) => {
    const Cliente = sequelize.define("clientes", {
        nombre: {
            type: Sequelize.STRING,
            allowNull: false
        },
        apellido: {
            type: Sequelize.STRING,
            allowNull: false
        },
        nit: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        telefono: {
            type: Sequelize.STRING
        },
        direccion: {
            type: Sequelize.STRING,
            allowNull: false
        },
    });

    return Cliente;
};