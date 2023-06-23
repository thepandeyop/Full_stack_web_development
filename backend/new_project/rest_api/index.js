const express = require('express')();
const app = express();
const PORT = 5500;

app.use(express.json)()
app.get('/tshirt', (req,res)=>{
res.status(256).send({
    tshirt: 'A',
    size: 'large'
})

});

app.post('/tshirt/:id',(req,res)=>{
    const{id} = req.params;
    const{logo} = req.body;

    if (!logo){
        res.status(418).send({message:'we need a logo'})
    }
   res.send({
    tshirt :`logog ${logo} and ID of ${id}`,
   }) 
});