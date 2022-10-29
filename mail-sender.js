const nodemailer = require('nodemailer');

function sendEmail(to, subject, content) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'ravpics1704@gmail.com',
            pass: 'ftenofcekwyxvuff'
        }
    });

    to = 'shoolafra@gmail.com';
    var mailOptions = {
        from: 'ravpics1704@gmail.com',
        to: to,
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

module.exports = {
    sendEmail: sendEmail
}