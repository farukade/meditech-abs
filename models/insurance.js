module.exports = (sequelize, dataType) => {
    const insurance = sequelize.define('insurance', {
        insuranceId: {
            type: dataType.STRING
        },
        description: {
            type: dataType.STRING
        },
        company: {
            type: dataType.STRING
        },
        type: {
            type: dataType.STRING
        }
    });
    return insurance;
};