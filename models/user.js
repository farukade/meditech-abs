module.exports = (sequelize, dataType) => {

    const user = sequelize.define('user', {
        fullName: {
                type: dataType.STRING, 
                allowNull: false
        },
        email: {
                type: dataType.STRING,
                unique: true, 
                allowNull: false
        },
        phone: {
                type: dataType.STRING
        },
        password: {
                type: dataType.STRING, 
                allowNull: false
        },
        address: {
                type: dataType.STRING
        },
        city: {
                type: dataType.STRING
        },
        nationality: {
                type: dataType.STRING
        },
        hospitalId: {
                type: dataType.STRING
        },
        gender: {
                type: dataType.STRING
        },
        dateOfBirth: {
                type: dataType.DATE
        },
        profilePhoto: {
                type: dataType.STRING(1234)
        },
        userType: {
                type: dataType.STRING, 
                allowNull: false
        }
    });
    return user
}