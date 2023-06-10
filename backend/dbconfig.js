const PORT = 27017;
const host = 'localhost';
const exprees = require('express');
const app = exprees();
app.listen(PORT,()=>{
    console.log(`server is working on ${PORT}`);
});

// mongodb connecton:-
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:PORT",{useNewURlParser:true,
useunifiedTopology:true}).then(() =>{
    console.log("Connected to mongodb successfully")
}).catch((err)=>{
    console.log(err);
});

const connection = mongoose.connection;
module.exports = connection;
