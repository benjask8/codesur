const nodemailer = require(`nodemailer`);

// ---------Script simple para enviar un mail con node mailer-----------
enviarMail = async (msg, subj, guy)=>{
    const config ={
        host : 'smtp.gmail.com',
        port : 587,
        auth : {
            user : 'rosanojuan65@gmail.com',
            pass : 'dradznjkkinbhdos'
        }
    };
    const mensaje = {
            from : guy,
            to : 'rosanojuan65@gmail.com',
            subject : subj,
            text: `De: ${guy} 
            
            ${msg}`
    };

    const transport = nodemailer.createTransport(config);

    const info = await transport.sendMail(mensaje);

    console.log(info)
}

//exportamos el modulo que creamos
module.exports = enviarMail;