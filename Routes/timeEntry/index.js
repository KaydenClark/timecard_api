  
const express = require('express');
require('dotenv').config()
const router = express.Router();

router.post('/', async(req, res) =>{
    time = req.body
    res.send(time)
})

module.exports = router