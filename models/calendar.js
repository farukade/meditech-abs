module.exports = (sequelize, dataType) => {
    const calendar = sequelize.define('calendar', {
        dutyDate: {
            type: dataType.DATE
        },
        period: {
            type: dataType.STRING
        }
    });
    return calendar;
};