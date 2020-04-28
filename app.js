const express = require('express');
const chalk = require('chalk');
require('dotenv').config()
const database = require('./conf'); 
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json()) 



//GET route to home page
app.get('/', (req, res)=>{
    res.send('Connected')
})

//Route to connect checkpoint database /playlist and /track
 app.get('/contacts', (req, res)=>{
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



//1.  POST - create a new playlist 
//201 status code - created
//400 status code - Bad Request
app.post('/newContact', (req, res)=>{
    database.query('INSERT INTO contact SET ?', req.body, (error, results)=>{
      if(!error){
        res.status(201).json(req.body);
      } else {
        res.status(400).send(error);
      }
    })
  })




//Port 3000 
app.listen(3000, (error)=>{
    if(error){
        console.log(chalk.red.inverse('There is an error running app.listen'))
    } else {
        console.log(chalk.green.inverse('Connected and listening to the port 3000'))
    }
})

