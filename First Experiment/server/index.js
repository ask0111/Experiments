const express = require('express');
require('./src/DB/db');
const cors = require('cors');
const app = express();
const router = require('./src/Public/Routers/index.js');
const bodyParser = require('body-parser');
require('dotenv').config();
const PORT = process.env.PORT;




app.use(express.json());
app.use(router);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))


app.get('/', (req, res)=>{
    res.status(202).send('Server Stated..')
})



app.listen(PORT, ()=>{
    console.log('Server listening Port', PORT)
})


