
// const http = require("http");
// const PORT = 2000;
// const hostname = "Localhost";
// const server = http.createServer((req,res,/*next*/)=>{
//     if (req.url==="/"){
//         return res.end("<h1>/home Page</h1>");
//     }
//     if (req.url==="/about"){
//          return res.end("<h1>/About Page</h1>");
//     }
//     if (req.url==="/contact"){
//         return res.end("<h1>/contact Page</h1>");
//     }
//     if (req.url==="/service"){
//          return res.end("<h1>/service Page</h1>");
//     }
//     else {
//         return res.end("404 page not found");
//     }
// });
// server.listen(PORT,hostname,()=> {
// console.log(`server is running on http://${hostname}:${PORT}`);
// });

// mongo db
/*
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/Sample",{useNewURlParser:true,useunifiedTopology:true}).then(() =>{
    console.log("Connected to mongodb successfully")
}).catch((err)=>{
    console.log(err);
})
const student = mongoose.Schema({
    name:String,Workout:Boolean,height:Number
})
const Student = mongoose.model("student",student);

 const adder = async()=>{
   
 const ss = await Student.create({
    name:"ABHI",
    workout:true,
    height:6
 });
 }
 adder();
 */
