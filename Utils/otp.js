// const nodemailer = require('nodemailer')
import nodemailer from 'nodemailer'
import dotenv from 'dotenv';
dotenv.config();


const transporter  = nodemailer.createTransport({
    service: "gmail",
    auth:{
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS

    }
})

const sendemail = (to , message) => {
    return transporter.sendMail({
        from : 'email',
        to,
        subject: 'Password Reset OTP',
        text: message,
    })
}

// module.exports = {sendemail}
export default sendemail