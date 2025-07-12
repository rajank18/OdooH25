const express = require("express");
const router = express.Router();

router.use("/auth", require("./auth.route"));
router.use("/users", require("./user.routes"));
router.use("/skills", require("./skill.routes"));
router.use("/user-skills", require("./userSkill.routes"));
router.use("/swaps", require("./swap.routes"));
router.use("/feedback", require("./feedback.routes"));
router.use("/messages", require("./message.routes"));
router.use("/admin", require("./admin.routes"));

module.exports = router;