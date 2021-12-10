module.exports = (sequelize, dataType) => {
    const medicalRecord = sequelize.define('medicalRecord', {
        details: {
            type: dataType.STRING
        }
    });
    return medicalRecord;
};