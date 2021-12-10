var express = require('express');
var router = express.Router();
const {usersController} = require("../controllers/users")
const { jwtAuth } = require("../middleware/auth");


/* Uodate specific patient profile. */
router.put('/update', jwtAuth.generalVerifyToken, usersController.updateProfile);


/* Get specific profile. */
router.get('/profile', jwtAuth.generalVerifyToken, usersController.getById);

/* Get all patients. */
router.get('/all-patients', jwtAuth.adminVerifyToken, usersController.getAllPatients);

/* Get all patients. */
router.get('/all-doctors', jwtAuth.adminVerifyToken, usersController.getAllDoctors);

/* Get all patients. */
router.post('/add-doctor', jwtAuth.adminVerifyToken, usersController.createDoctor);


// /* Get specific patient profile. */
// router.delete('/delete-patient', jwtAuth.patientVerifyToken, usersController.deletePatientProfile);


module.exports = router;
