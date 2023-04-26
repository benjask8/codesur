const { Router } = require('express');
const router = Router();

const { 
    renderIndex,
    renderAbout,
    renderContact,
    renderPortafolio
} = require('../controllers/index.controller')

router.get('/', renderIndex);
router.get('/about', renderAbout);
router.get('/portafolio', renderPortafolio);
router.get('/contact', renderContact);

module.exports = router;
