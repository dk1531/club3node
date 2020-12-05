const express = require('express')
var app = express.Router();
const joi = require('@hapi/joi')

app.get('/getusers', (req, res) => {

    res.json("users")
})

function validateUser(user) {

    const schema = joi.object({

        username: joi.string().min(3).max(7),
        useremail:joi.string().email()
        

    }).options({abortEarly:false})

    return schema.validate(user)
}

app.post('/adduser', (req, res) => {

    var user = {

        useremail:req.body.useremail,
        username: req.body.username
       
    }
    resp = validateUser(user);
    if (resp.error) {

        console.log(resp)
        res.status(422).json({"error":resp.error.message})
        
    }
    else {
        res.status(201).json("Created..")

    }


})


module.exports = app;