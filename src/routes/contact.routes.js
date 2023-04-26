const { Router } = require('express');
const router = Router();

const { 
    sendMailC
} = require('../controllers/contact.controller')

//-----Enviar el Correo
router.post('/contact/send', sendMailC);

module.exports = router;
