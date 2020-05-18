const express = require('express');
const path = require ('path'); 
const chalk = require('chalk');
require('dotenv').config();
/* const bodyParser = require('body-parser') */
const nodemailer = require('nodemailer');

const app = express();
/* app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())  */
app.use(express.json()); 
app.use(express.urlencoded({ extended: false })); 

 
app.use(express.static(path.join(__dirname, 'public')));


app.post('/ajax/email', function(request, response){
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465, //secure port
    secure: true,
    auth: {
      user: 'process.env.EMAIL',
      pass: 'process.env.PASSWORD'
  }
}); 


let textBody = `FROM: ${request.body.name}; EMAIL: ${request.body.email}; MESSAGE: $(request.body.message)`;

let htmlBody = `<h2> Mail From Contact Form</h2><p>From: ${request.body.name} <a href='mailto: ${request.body.email}'>${request.body.email}</a></p>'`; 

//create mail options (what is sent to user)
 
let mailOptions = {
  from: 'nncc11911@gmail.com',
  to: 'nncc11911@gmail.com',
  subject: 'Test', 
  text: textBody,
  html: htmlBody 
  /*  text: 'It is working'   */
  /* html: */
 }; 


 

//take variable transporter to create a function to send the email
transporter.sendMail(mailOptions, function (err, info){
    if (err) {
          console.log (err);
          response.json ({ message: 'Error has occurred'});
    } else {
        /*  console.log('Email has been sent'); */
          response.json ({ message: `message sent with ID: ${info.messageId}`});
        }
    });
});


/* const nodemailer = require('nodemailer'); */
 
/* nodemailer.createTestAccount((err, account) => {
    let transporter = nodemailer.createTransport({
        host: 'smtp.googlemail.com', // Gmail Host
        port: 465, // Port
        secure: true, // this is true as port is 465
        auth: {
            user: 'process.env.EMAIL', //Gmail username
            pass: 'process.env.PASSWORD' // Gmail password
        }
    }); */
 
    /* let mailOptions = {
        from: 'nncc11911@gmail.com',
        to: 'nncc11911@gmail.com', // Recepient email address. Multiple emails can send separated by commas
        subject: 'Welcome Email',
        text: 'This is the email sent through Gmail SMTP Server.'
    };
 
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
    });
});
 */





//connects to host domain
/* Let transporter = nodemailer.createTransport({
  service: 'gmail', */
//connect to gmail
 /*  auth: {
    user: 'process.env.EMAIL',
    pass: 'process.env.PASSWORD'
  }
}); */








/*  transporter.sendMail(mailOptions)
  .then(function(response){
    console.log('Email sent');
  })
  .catch(function(error) {
    console.log('Error: ', error);
  });
 */


//GET route to home page
/* app.get('/', (req, res)=>{
    res.send('Connected')
}) */

//Route to connect checkpoint database /playlist and /track
/*  app.get('/contacts', (req, res)=>{
    database.query('SELECT * FROM contact', (error, results)=>{
        if(error){ 
            console.log(chalk.red.inverse('There is an error with GET /contact'));
            res.send(error)
        } else{
            console.log(chalk.green.inverse('The route GET /contact was called successfully'));
            res.send(results)
        }
    })
}) 
 */


//1.  POST - create a new playlist 
//201 status code - created
//400 status code - Bad Request
/* app.post('/newContact', (req, res)=>{
    database.query('INSERT INTO contact SET ?', req.body, (error, results)=>{
      if(!error){
        res.status(201).json(req.body);
      } else {
        res.status(400).send(error);
      }
    })
  })
 */



//Port 3000 
app.listen(3000, (error)=>{
    if(error){
        console.log(chalk.red.inverse('There is an error running app.listen'))
    } else {
        console.log(chalk.green.inverse('Connected and listening to the port 3000'))
    }
})


/* To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express. */



/* 
tutorials used:
https://www.youtube.com/watch?v=NB71vyCj2X4
https://www.youtube.com/watch?v=JpcLd5UrDOQ


https://www.youtube.com/watch?v=03vkkApu2is */