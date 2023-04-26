contactController = {};
const sendMail = require('../functions/enviarCorreos');

contactController.sendMailC = async (req, res)=>{
    console.log(req.body);
    sendMail(req.body.txt, req.body.subj, req.body.guy);
    req.flash('success_msg', 'Mensaje Enviado Con Exito');
    res.redirect('/contact');
}
module.exports = contactController;