var express = require('express');
var router = express.Router();
const {departmentsController} = require("../controllers/departments");
const { jwtAuth } = require("../middleware/auth");

/* create new record. */
router.post('/create', jwtAuth.adminVerifyToken, departmentsController.create);

/* GET all department. */
router.get('/', jwtAuth.adminVerifyToken, departmentsController.getAll);

/* GET each department by Id. */
router.get('/:id', jwtAuth.staffVerifyToken, departmentsController.getById);

/* Update department record by id. */
router.put('/update/:id', jwtAuth.staffVerifyToken, departmentsController.update);

/* Delete user by id. */
router.delete('/delete/:id', jwtAuth.adminVerifyToken, departmentsController.delete);

module.exports = router;