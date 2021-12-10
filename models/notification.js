module.exports = (sequelize, dataType) => {
    const notification = sequelize.define('notification', {
        subject: {
            type: dataType.STRING
        },
        content: {
            type: dataType.STRING
        },
        isSent: {
            type: dataType.BOOLEAN
        }
    });
    return notification;
};