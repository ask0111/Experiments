const express = require('express');
require('./src/DB/db');
const app = express();
const router = require('./src/Public/Routers/index.js');
const PORT = 8080;

app.use(express.json());
app.use(router)


app.get('/', (req, res)=>{
    res.status(202).send('Server Stated..')
})



app.listen(PORT, (err)=>{
    console.log(err)
})


