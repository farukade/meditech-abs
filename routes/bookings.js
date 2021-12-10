var express = require("express");
var router = express.Router();
const { bookingsController } = require("../controllers/bookings");
const { jwtAuth } = require("../middleware/auth");

/* create new record. */
router.post("/create", jwtAuth.patientVerifyToken, bookingsController.create);

/* GET users listing. */
router.get("/getall", jwtAuth.patientVerifyToken, bookingsController.getAll);

router.get("/user", jwtAuth.patientVerifyToken, bookingsController.getbyUser);



/* GET each booking by Id. */
router.get(
  "/:id",
  jwtAuth.patientVerifyToken,
  bookingsController.getByBookingId
);

/* GET each booking by userID. */

router.get(
  "/userBookings",
  jwtAuth.patientVerifyToken,
  bookingsController.getByBookingId
);


/* Update user record by id. */
router.put("/update/:id", jwtAuth.patientVerifyToken, bookingsController.update);

/* Delete user by id. */
router.delete("/delete/:id", jwtAuth.patientVerifyToken, bookingsController.delete);

module.exports = router;
