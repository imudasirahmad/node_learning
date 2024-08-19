var nodemailer = require('nodemailer');
////noaz itih qlyl gcar

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'selenophilexyz1@gmail.com',
    pass: 'noaz itih qlyl gcar'
  }
});

var mailOptions = {
  from: 'selenophilexyz1@gmail.com',
  to: 'mudasirahmad0311@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

//Send email to more than one address:
var mailOptions = {
    from: 'selenophilexyz1@gmail.com',
    to: 'mudasirahmad0311@gmail.com, masoodalikhan780@yahoo.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  }

  //To send HTML formatted text in your email
  var mailOptions = {
    from: 'youremail@gmail.com',
    to: 'myfriend@yahoo.com',
    subject: 'Sending Email using Node.js',
    html: '<h1>Welcome</h1><p>That was easy!</p>'
  }