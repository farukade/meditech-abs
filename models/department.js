module.exports = (sequelize, dataType) => {
    const department = sequelize.define('department', {
        name: {
            type: dataType.STRING
        },
        description: {
            type: dataType.STRING
        }
    });
    return department;
};