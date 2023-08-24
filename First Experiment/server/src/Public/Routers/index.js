const express = require('express');

const router = express.Router();

router.get('/s', (req, res)=>{
    res.status(202).send('This is Router')
})

module.exports = router;