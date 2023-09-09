module.exports = (sequelize, Sequelize) => {
    const Mesa = sequelize.define("mesas", {
        estado: {
            type: Sequelize.STRING
        },
        capacidad: {
            type: Sequelize.INTEGER
        }
    });

    return Mesa;
};