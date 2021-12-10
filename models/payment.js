module.exports = (sequelize, dataType) => {
    const payment = sequelize.define('payment', {
        date: {
            type: dataType.DATE
        },
        isPaid: {
            type: dataType.BOOLEAN
        }
    });
    return payment;
};