const express=require('express');

const app=express();

app.get('/api',(req,res)=>{
    res.send('every thing work successfully');
})

const port=process.env.PORT||3000

app.listen(port,()=>{console.log(`server listining on port ${port}`)})
