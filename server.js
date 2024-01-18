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


// for(const users of  users){
//     if(user.email){
//         const mailOptions={
//             from: 'abc',
//             template: 'email',
//             to: user.email,
//             subject: `Welcome to my company`,
//             context: {
//                 name: user.name,
//                 company: 'My company'
//             }
//         }
//     };

//     //sending mail
//     try{
//         await transporter.sendMail(mailOptions);
//     }catch(error){
//         console.log(error);
//     }


// }


var mailOptions={ from: 'abc',
                template: 'email',
                to: 'cse.shivam98@gmail.com',
                subject: `Welcome to my company`,
                context: {
                    name: 'Pandey',
                    company: 'Rocktech'
                }
            }

transporter.sendMail(mailOptions, function(error,info){
    if(error){
        return console.log(error);
    }
    console.log("Message sent"+ info.response);
})