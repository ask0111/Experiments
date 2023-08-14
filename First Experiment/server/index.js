const express = require('express');
const app = express();
const router = express.Router()
const PORT = 8080;
app.use(express.json());
app.set(router())

app.listen(PORT, (err)=>{
    console.log(err)
})

module.exports = router;
