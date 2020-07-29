const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const app = express();
const path = require('path');

const sendMail = async (user, callback) => {
  let testAccount = await nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
     host: "smtp.ethereal.email",
     port: 587,
     secure: false, // true for 465, false for other ports
     auth: {
       user: testAccount.user, // generated ethereal user
       pass: testAccount.pass, // generated ethereal password
     },
   });

   let info = await transporter.sendMail({
    from: `${user.name}, ${user.email}`, // sender address
    to: "pwnflakes25@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

   transporter.sendMail(info, callback);
   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

// const forceSSL = function() {
//   return function (req, res, next) {
//     if (req.headers['x-forwarded-proto'] !== 'https') {
//       return res.redirect(
//        ['https://', req.get('Host'), req.url].join('')
//       );
//     }
//     next();
//   }
// }


app.use(cors({origin: "*"}));
app.use(bodyParser.json());
// app.use(forceSSL());



// Start the app by listening on the default Heroku port
app.listen( process.env.PORT || 8080);

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/elektroPower'));

app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+'/dist/elektroPower/index.html'));
});

app.post("/sendmail", (req, res) => {
  let user = req.body;
  sendMail(user, (err, info) => {
    if (err) {
      console.log(err);
      res.status(400);
      res.send({error: "Something is wrong"});
    } else {
      res.send(info);
    }
  })
});
