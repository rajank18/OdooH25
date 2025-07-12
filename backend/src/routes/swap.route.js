const express = require('express');
const router = express.Router();
const swapController = require('../controllers/swap.controller');

router.post('/', swapController.createSwapRequest);
router.get('/', swapController.getAllSwaps);
router.get('/user/:userId', swapController.getUserSwaps);
router.put('/:id/accept', swapController.acceptSwap);
router.put('/:id/reject', swapController.rejectSwap);
router.delete('/:id', swapController.deleteSwap);

module.exports = router;
