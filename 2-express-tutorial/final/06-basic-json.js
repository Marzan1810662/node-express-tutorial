const express = require('express')
const {products} = require('./data')
const app = express()

app.get('/',(req,res)=>{
    // res.json([{name:'Mahir'},{name:'Marzan'}])
    res.json(products)
})

app.all('*', (req,res)=>{
    res.status(404).send(`Url is not found`)
})

app.listen(5000, (req,res)=>{
    console.log(`Server is running on port 5000...👍`);
})