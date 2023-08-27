const nodemailer = require('nodemailer');
require('dotenv').config();

const emailOTP = async(req, res)=>{
    let test = await nodemailer.createTestAccount();

    const transporter = await nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        auth: {
          user: process.env.EMAIL_Username,
          pass: process.env.EMAIL_Password,
        },
      })


      const info = await transporter.sendMail({
        from: '"Hi " <myemail@example.com>',
        to: "hariomask0111@gmail.com", 
        subject: "Hello ✔", 
        text: "Hello world?", 
        html: "<b>Hello world?</b>", 
      });
      console.log("Message sent: %s", info.messageId);
    res.json(info);
}

module.exports = emailOTP;