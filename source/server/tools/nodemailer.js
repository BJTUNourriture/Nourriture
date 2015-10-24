var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'nourriture.postman@gmail.com',
        pass: 'I_like_food'
    }
});

var mailOptions = {
    from: 'Nourriture ✔ <nourriture.postman@gmail.com>', // sender address
    to: '', // list of receivers
    subject: '✯ Welcome to the Nourriture network ✯', // Subject line
    html: '<h1>We greet you a warm welcome to the nourriture community!</h1>' // html body
};

exports.transporter = transporter;
exports.mailOptions = mailOptions;