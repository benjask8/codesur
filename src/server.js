const express = require('express');
const path = require('path')
const bp = require('body-parser')
const flash = require('connect-flash');
const session = require('express-session');


//* initialization
const app = express();


//* settings
app.set('view engine','ejs'); //seteamos ejs como el modelo de vistas
app.set('port', process.env.PORT || 4000) //seteamos el puerto

//*midlewares
app.use(express.static('public')); //seteamos la carpeta public
app.use(bp.json()) //para que funcione el req.body
app.use(bp.urlencoded({ extended: true }))
app.use(session({
    secret: 'mi-secreto',
    resave: false,
    saveUninitialized: false
  }));
app.use(flash());


//*global variables
app.use((req,res,next)=>{
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next()
});

//* Routes
app.use(require('./routes/index.routes.js'))
app.use(require('./routes/contact.routes.js'))


//* Static Files
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;