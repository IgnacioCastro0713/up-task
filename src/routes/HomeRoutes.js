const { Router } = require('express');

const router = Router();

const HomeController = require('../controllers/HomeController');

router.get('/', HomeController.index);
router.get('/about', HomeController.about);

module.exports = router;
