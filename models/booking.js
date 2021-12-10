module.exports = (sequelize, dataType) => {
    const booking = sequelize.define('booking', {
        description: {
            type: dataType.STRING
        },
        date: {
            type: dataType.DATE, 
            allowNull: false
        }
    });
    return booking;
};