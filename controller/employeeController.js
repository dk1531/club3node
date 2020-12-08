const express = require('express')
var app = express.Router();
var dbConn = require('../util/mySQLConnecction')

app.post('/addemployee', (req, res) => {


    insertEmployee(req, res);
})

app.get('/viewemployees', (req, res) => {

    let query = dbConn.query("select * from employee", (err, data) => {
        if (!err) {
            res.send(data)
        }
    })
})
//wild card character..
app.delete('/deleteemployee/:id', (req, res) => {

    var id = req.params.id
    
    let query =dbConn.query("delete from employee where eid ="+id+"",(err,success)=>{

        if(!err){

            res.send(id+"- deleted.")
        }

    })



})

function insertEmployee(req, res) {

    var employeeName = req.body.employeeName;
    let query = dbConn.query("insert into employee(ename)values('" + employeeName + "')", (err, status) => {

        if (!err) {


            var ar = status.affectedRows
            if (ar > 0) {
                res.status(201).json("created..")
            }

        }
    })




}





module.exports = app