const PORT = 27017;
const host = 'localhost';

// mongodb connecton:-
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/unshortner",{useNewURlParser:true,
useunifiedTopology:true}).then(() =>{
    console.log("Connected to mongodb successfully")
}).catch((err)=>{
    console.log(err);
});

const connection = mongoose.connection;
module.exports = connection;

