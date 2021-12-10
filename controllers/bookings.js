const { compareSync } = require("bcryptjs");
const db = require("../models/index");
const { constants } = require("./constants");
const bookings = db.booking;

exports.bookingsController = {
  create: (req, res) => {

    const booking = req.body;
    booking.userId = req.userId;
    bookings
      .create(booking)
      .then((data) => {
        infoObj = {
          id: data.id,
          description: data.description,
          date: data.date,
        };
        res
          .status(200)
          .send({ status: true, message: "booking successful", data: infoObj });
      })
      .catch((err) => {
        constants.handleErr(err, res);
      });
  },

  getAll: (req, res) => {
    bookings
      .findAll({ include: db.user })
      .then((data) => {

        let infoObj = [];
        data.forEach((info) => {
          let infoObj1 = {
            id: info.id,
            description: info.description,
            date: info.date,
            user: {
              fullName: info.user.fullName,
              email: info.user.email,
              profilePhoto: info.user.profilePhoto,
              userType: info.user.userType,
            },
          };
          infoObj.push(infoObj1);
        });


        res.status(200).send({
          success: true,
          message: "All Bookings Retrieved successfully",
          data: infoObj,
        });
      })
      .catch((err) => {
        res.status(400).send({
          message: err.message || "Could not find record",
        });
      });
  },

  getByBookingId: (req, res) => {
    bookings
      .findOne({
        where: {
          id: req.params.id,


        },
      })
      .then((data) => {
        if (!data) {
          res.status(400).send({
            message: "Record not found",
          });
        } else if (req.userId != data.userId) {
          res.status(400).send({
            message: "Unauthorised Access",
          });
        }
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(400).send({
          message: err.message || "Could not find record",
        });
      });
  },

  getbyUser: (req, res) => {
    bookings
      .findAll({ where: {
       userId: req.userId, }})
      .then((data) => {
        if (!data) {
          res.status(400).send({
            message: "Record not found",
          });
        }
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(400).send({
          message: err.message || "Could not find record",
        });
      });
  },

  update: (req, res) => {
    const booking = req.body
    bookings
      .update(booking, {
        where: {
          id: req.params.id,
        },
      })
      .then((data) => {
        if (data[0] !== 1) {
          res.status(400).send({
            message: "Record not found",
          });
        }
        res.status(200).send({message: "Record Updated"});
      })
      .catch((err) => {
        constants.handleErr(err, res);
      });
  },

  delete: (req, res) => {
    bookings
      .destroy({
        where: {
          id: req.userId
        },
      })
      .then((data) => {
        if (data[0] !== 1) {
          res.status(400).send({
            message: "Record not found",
          });
        }
        res.status(200).send("Record Deleted");
      })
      .catch((err) => {
        res.status(400).send({
          message: err.message || "Could not be deleted",
        });
      });
  },
};
