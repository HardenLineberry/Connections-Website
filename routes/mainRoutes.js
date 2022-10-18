const express = require('express');
const controller = require('../controllers/mainController');

const router = express.Router();

//GET /: Home page
router.get('/', controller.index);

//GET /about: About page
router.get('/about', controller.about);

//GET /contact: Contact page
router.get('/contact', controller.contact);


module.exports = router;