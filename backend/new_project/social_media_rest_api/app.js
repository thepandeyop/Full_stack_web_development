import express from 'express';
import mongoose from 'mongoose'
const app = express();
mongoose.connect("mongodb+srv://thepandeyop:pJCl8d14irzfKDcY@cluster0.ez5ys4n.mongodb.net/")
.then(()=>app.listen(5000))
.then(()=>console.log("connected to database and listen to 5000")
).catch((err)= console.log(err));
// cluster password pJCl8d14irzfKDcY
//mongodb+srv://thepandeyop:pJCl8d14irzfKDcY@cluster0.ez5ys4n.mongodb.net/