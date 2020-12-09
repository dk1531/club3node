const multer = require('multer')
const express = require('express')
const app = express.Router()
const path = require('path')

//define storage...

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        console.log("file-->", file)
        //cb(null, Date.now() + path.extname(file.originalname));
        cb(null, file.originalname);
    }
})

var flag = false
const fileFilter = (req, file, cb) => {

    if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/png') {
        flag = true
        cb(null, true)
    }
    else {
        flag = false
        cb(null, false)
    }
}


const upload = multer({ storage: storage, fileFilter: fileFilter });

app.post('/upload', upload.single('image'), (req, res, next) => {

    try {

        console.log("flag...", flag)
        if (flag == true) {

            return res.status(201).json({ message: "File uploaded SuccesFully.." })
        }
        else {

            return res.status(422).json({ error: "Could not upload file only jpeg/png allow.." })
        }


    } catch (error) {


    }

})

module.exports = app