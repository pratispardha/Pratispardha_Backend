require('dotenv').config();
var nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    // port: 465,
    // host: "smtp.gmail.com",
    service: 'gmail',
    auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.USER_PASS,
    },
    secure: true,
});
module.exports = transporter;
