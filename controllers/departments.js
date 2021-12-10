const db = require("../models/index");
const { constants } = require("./constants");
const departments = db.department;

exports.departmentsController = {
  create: (req, res) => {
    const department = req.body;
    departments
      .create(department)
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        constants.handleErr(err, res);
      });
  },

  getAll: (req, res) => {
    departments
      .findAll()
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(400).send({
          message: err.message || "Could not find record",
        });
      });
  },

  getById: (req, res) => {
    departments
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
    const department = req.body;
    departments
      .update(department, {
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
        res.status(200).send({message: "Department Updated Successfully"});
      })
      .catch((err) => {
        constants.handleErr(err, res);
      });
  },

  delete: (req, res) => {
    departments
      .destroy({
        where: {
          id: req.params.id
        }
      })
      .then((data) => {
        if (data !== 1) {
            res.status(400).send({
              message: "Record not found"
            });
          }
        res.status(200).send({message: "Department Deleted Successfully"});
      })
      .catch((err) => {
        res.status(400).send({
            message: err.message || "Could not be deleted",
          });
      });
  },
};
