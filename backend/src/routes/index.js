const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth.middleware.js");
const admin = require("../middlewares/admin.middleware.js");

router.use("/auth", require("./auth.route"));
router.use("/users", auth, require("./user.routes"));
router.use("/skills", auth, require("./skill.routes"));
router.use("/user-skills", auth, require("./userSkill.routes"));
router.use("/swaps", auth, require("./swap.routes"));
router.use("/feedback", auth, require("./feedback.routes"));
router.use("/messages", auth, require("./message.routes"));
router.use("/admin", auth, admin, require("./admin.routes"));

module.exports = router;