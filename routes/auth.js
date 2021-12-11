const express =require('express');
const authController =require('../controllers/auth')


const router = express.Router();

router.post('/subscribe',authController.subscribe);

module.exports = router;