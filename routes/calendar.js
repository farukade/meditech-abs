var express = require('express');
var router = express.Router();
const {calendarController} = require("../controllers/calendar")
const { jwtAuth } = require("../middleware/auth");


/* Uodate specific calendar. */
router.put('/update/:id', jwtAuth.adminVerifyToken, calendarController.update);


/* Get all doctors calendar. */
router.get('/all', jwtAuth.generalVerifyToken, calendarController.getAll);

/* Create doctor calendar. */
router.post('/create', jwtAuth.adminVerifyToken, calendarController.create);

/* Get calendar of a doctor. */
router.get('/doctor/:id', jwtAuth.staffVerifyToken, calendarController.getByDoctorId);

/* Get calendar of a doctor. */
router.post('/create-multiple', jwtAuth.adminVerifyToken, calendarController.createMultiple);


/* Get calendar by its id. */
// router.get('/:id', jwtAuth.generalVerifyToken, calendarController.getByCalendarId);

/* delete calendar by its id. */
router.delete('/delete/:id', jwtAuth.adminVerifyToken, calendarController.delete);




module.exports = router;
