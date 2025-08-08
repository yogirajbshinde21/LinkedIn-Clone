const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI).then(res=> {
    console.log('Database successfully connected.');
}).catch(err=> {
    console.log(err);
})