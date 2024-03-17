const hbs=require("nodemailer-express-handlebars");

const nodemailer=require('nodemailer');

const path=require('path');

require('dotenv').config();

//nodemailer initializer

var transporter =nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});



//point to the template folders

const handlerOptions={
    viewEngine:{
        partialsDir: path.resolve('./views/'),
        defaultLayout: false
    },
    viewPath: path.resolve("./views/"),
}

//use a template file with nodemailer

transporter.use('compile', hbs(handlerOptions));

var mailList=['*****@gmail.com','*****@gmail.com']

var mailOptions={ from: 'abc',
                template: 'email',
                to: mailList,
                subject: `Looking for Job Opportunities`,
                context: {
                    name: 'Pandey',
                    company: 'Rocktech'
                },
                attachments: {
                    filename:"Satyam Resume",
                    path:"satyam-maurya2024.docx.pdf",
                    contentType: 'application/pdf'
                }
            }

transporter.sendMail(mailOptions, function(error,info){
    if(error){
        return console.log(error);
    }
    console.log("Message sent"+ info.response);
})