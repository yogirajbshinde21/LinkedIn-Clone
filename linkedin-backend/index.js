const express = require('express');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 4000;

require('./connection');


app.get('/', (req,res) => {
    res.send({
        messgae: "This is backend server! Also Running on PORT 4000."
    })
})


app.listen(PORT, () => {
    console.log(`Backend server is running on port http://localhost:${PORT} `)
})