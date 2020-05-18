const express = require('express');
const chalk = require('chalk');
require('dotenv').config()
const bodyParser = require('body-parser')
const app = express();
const nodemailer = require('nodemailer')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json()) 



//connects to host domain
let transporter = nodemailer.createTransport({
  service: 'gmail',
//connect to gmail
  auth: {
    user: 'process.env.EMAIL',
    pass: 'process.env.PASSWORD'
  }
});

//create mail options (what is sent to user)

let mailOptions = {
  from: 'nncc11911@gmail.com',
  to: 'ccnn1010@gmail.com',
  subject: 'Test',
  text: 'It is working'
}



//take variable transporter to create a function to send the email
transporter.sendMail(mailOptions, function (err, data){
  if (err) {
    console.log('Error has occurred', err);
  } else {
    console.log('Email has been sent');
  }
});


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

