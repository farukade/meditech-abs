const Sequelize = require("sequelize");
require("dotenv").config()

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: "mysql",
  pool: {
    min: 0,
    max: 5,
    acquire: 5000,
    Idle: 1000,
  },
});

sequelize
  .authenticate()
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("cannot connect" + err));


const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.user = require('./user') (sequelize, Sequelize);
db.booking = require('./booking') (sequelize, Sequelize);
db.calendar = require('./calendar') (sequelize, Sequelize);
db.notification = require('./notification') (sequelize, Sequelize);
db.medicalRecord = require('./medicalRecord') (sequelize, Sequelize);
db.department = require('./department') (sequelize, Sequelize);
db.bill = require('./bill') (sequelize, Sequelize);
db.insurance = require('./insurance') (sequelize, Sequelize);
db.payment = require('./payment') (sequelize, Sequelize);



//One to many
db.user.hasMany(db.notification);
db.notification.belongsTo(db.user);

//one to one
db.user.hasOne(db.medicalRecord);
db.medicalRecord.belongsTo(db.user);

//One to many
db.user.hasMany(db.booking);
db.booking.belongsTo(db.user);

//One to many
db.calendar.hasMany(db.booking);
db.booking.belongsTo(db.calendar);

//one to many
db.department.hasMany(db.user);
db.user.belongsTo(db.department);

//one to one
db.bill.hasOne(db.payment);
db.payment.belongsTo(db.bill);

//one to one
db.insurance.hasOne(db.payment);
db.payment.belongsTo(db.insurance);

//one to one
db.user.hasOne(db.calendar);
db.calendar.belongsTo(db.user);

module.exports = db;
