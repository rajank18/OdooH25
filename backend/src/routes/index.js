const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth.middleware.js");
const admin = require("../middlewares/admin.middleware.js");

router.use("/auth", require("./auth.route"));
router.use("/users", auth, require("./user.route.js"));
router.use("/skills", auth, require("./skill.route.js"));
router.use("/user-skills", auth, require("./userSkill.route.js"));
router.use("/swaps", auth, require("./swap.route.js"));
router.use("/feedback", auth, require("./feedback.route.js"));
router.use("/messages", auth, require("./message.route.js"));
router.use("/admin", auth, admin, require("./admin.route.js"));

module.exports = router;