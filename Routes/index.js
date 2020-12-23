const express = require('express');
const cors = require('cors')
const router = express.Router();

router.use(cors())
router.use(express.json())

const {testConnection} = require('../DataAccess/testConnection')

router.use('/timeEntry', require('./timeEntry'))


router.get('/', async (req, res) => {
    const connection = await testConnection()
    res.send(connection)
})

module.exports = router