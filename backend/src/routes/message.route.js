const express = require('express');
const router = express.Router();
const messageController = require('../controllers/message.controller');

router.post('/', messageController.sendMessage);
router.get('/user/:userId', messageController.getUserMessages);
router.put('/:id/read', messageController.markAsRead);
router.get('/unread/:userId', messageController.getUnreadCount);
router.delete('/:id', messageController.deleteMessage);

module.exports = router;
