module.exports = (sequelize, Sequelize) => {
    const Proveedor = sequelize.define("proveedores", {
        nombre: {
            type: Sequelize.STRING
        },
        descripcion: {
            type: Sequelize.STRING
        }
    });

    return Proveedor;
};