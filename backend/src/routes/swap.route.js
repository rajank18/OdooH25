// File: routes/swap.routes.js
const express = require("express");
const router = express.Router();
const validate = require("../middlewares/validate");
const { createSwapSchema } = require("../validations/swap.validation");
const swapController = require("../controllers/swap.controller");

router.post("/", validate(createSwapSchema), swapController.createSwap);
router.get("/me/sent", swapController.getSentSwaps);
router.get("/me/received", swapController.getReceivedSwaps);
router.patch("/:id/accept", swapController.acceptSwap);
router.patch("/:id/reject", swapController.rejectSwap);
router.patch("/:id/cancel", swapController.cancelSwap);

module.exports = router;
