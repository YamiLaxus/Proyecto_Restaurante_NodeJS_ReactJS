module.exports = (sequelize, Sequelize) => {
    const Usuario = sequelize.define("usuarios", {
        nombre: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        apellido: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        nit: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        dpi: {
            type: Sequelize.INT,
            allowNull: false,
            unique: true
        },
        direccion: {
            type: Sequelize.STRING
        },
        telefono: {
            type: Sequelize.STRING
        },
        fecha_alta: {
            type: Sequelize.DATEONLY,
            allowNull: false,
            defaultValue: new Date()
        },
        fecha_baja: {
            type: Sequelize.DATEONLY,
            allowNull: false,
            defaultValue: new Date()
        }
    });

    return Usuario;
};