export default (sequelize, Sequelize) => {
    const Mesa = sequelize.define("mesas", {
        estado: {
            type: Sequelize.BOOLEAN
        },
        capacidad: {
            type: Sequelize.INT
        }
    });

    return Mesa;
};