const express = require('express');
const path = require('path');
const app = express();
const port = 4000;
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.get("/api/v1/userdata", (req, res)=>{
    read.json({
        name: 'mriirs_19',
        email: 'abhishek_pandey21@gmail.net',
        password: 'abhishekpandey'
    });
});

app.listen(port,()=>{
    console.log(`server is working on port: ${port}`);
    });

app.post("/api/v1/register",(req,res)=>{
    res.send(`<h1>DONE mr. ${req.body.name}</h1> <h2> your email is${req.body.email}</h2> <h3>your password is ${req.body.password} </h3>`);
console.log(req.body);
});
https://prod.liveshare.vsengsaas.visualstudio.com/join?B4B261A6149D9514D89144BA4456397A2213