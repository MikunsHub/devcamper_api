const express = require("express");
const {
  register,
  login,
  getMe,
  updateDetails,
  updatePassword,
  forgotpassword,
  resetPassword
} = require("../controllers/auth");
const { protect } = require("../middleware/auth");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/me", protect, getMe);
router.put("/updatedetails", protect, updateDetails);
router.put('/updatepassword', protect, updatePassword);
router.post("/forgotpassword", forgotpassword);
router.put("/resetpassword/:resettoken", resetPassword);

module.exports = router;
