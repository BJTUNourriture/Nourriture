var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'nourriture.postman@gmail.com',
        pass: 'I_like_food'
    }
});

exports.mailOptionsGreeting = {
    from: 'Nourriture ✔ <nourriture.postman@gmail.com>',
    to: '',
    subject: '✯ Welcome to the Nourriture network ✯',
    html: '<h1>We greet you a warm welcome to the nourriture community!</h1>'
};

exports.mailOptionsEmailConfirm = function (token, recipient) {
	return {
    	from: 'Nourriture ✔ <nourriture.postman@gmail.com>',
    	to: recipient,
    	subject: '✯ Please confirm your email ✯',
    	/*html: '<h1>Please confirm your email :</h1><p><a href="http://127.0.0.1:8101/api/users/verify-email/'+token+'">Click here to confirm</a>'*/
        html: '<h1>Please confirm your email :</h1><p><a href="http://'+HOSTNAME+'127.0.0.1:8101/api/users/verify-email/'+token+'">Click here to confirm</a>'

    }
};

exports.transporter = transporter;