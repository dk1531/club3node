const express = require('express')
const app = express()
const bodyparser = require('body-parser')
//app.use(bodyparser.urlencoded({ extended: true }))
app.use(express.json())
const userController = require('./controller/userController')
const employeeController = require('./controller/employeeController')
const fileuploader = require('./controller/FileUploadController')
app.use('/user', userController)
app.use('/employee', employeeController)
app.use('/upload', fileuploader)
/* 
const posts = [

    {
        username: "samir",
        title: "post 1"
    },
    {
        username: "jay",
        title: "post 2"
    },
    {
        username: "raj",
        title: "post 3"
    }
]

app.post('/adduser',(req,res)=>{

    console.log("function called...")
    var username = req.body.username;
    console.log(req.headers['authorization'])
    console.log("username ===",username)
    res.send("data addedd..")
})

app.get('/', (req, res) => {


    //res.send("hello")
    //res.json("hello")
    //res.status(400).json("ok")
    //res.sendStatus(403)
    //res.json(posts)
    res.send(posts)
})
 */

app.listen(3000, () => {

    console.log("server stared...")
})

