module.exports = (sequelize, dataType) => {
    const bill = sequelize.define('bill', {
        description: {
            type: dataType.STRING
        },
        date: {
            type: dataType.DATE
        },
        amount: {
            type: dataType.INTEGER
        }
    });
    return bill;
};