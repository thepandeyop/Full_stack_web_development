const PORT = 5000;
const host = 'localhost';
const express = require('express');

const connection = require('./dbconfig');
connection.once('open', () => console.log('DB Connected'))
connection.on('error', () => console.log('Error'))

const app = express();
app.use(express.json({
    extended: false
})) //parse incoming request body in JSON format.
app.use('/', require('./post'))
app.use('/api/url', require('./get'))
app.listen(PORT,()=>{
    console.log(`server is working on ${PORT}`);
});