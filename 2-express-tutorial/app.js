const express = require('express')
const {products} = require('./data')
const app = express()

app.get('/',(req,res)=>{
    res.send('<h1>Home Page</h1><a href = "/api/products">Products</a>')
})

app.get('/api/products',(req,res)=>{
    const newProducts = products.map((product)=>{
        const {id,name,image} = product
        return {id,name,image}
    })
    res.json(newProducts)
})

app.get('/api/products/:productId',(req,res) =>{
    // console.log(req);
    // console.log(req.params);
    const {productId} = req.params
    const singleProduct = products.find((product)=>{
        return product.id === Number(productId)
    })
    // console.log(singleProduct);
    if (!singleProduct){
        return res.status(404).send('Product does not exist')
    }
    res.json(singleProduct)
})

app.get('/api/products/:productId/reviews/:reviewId',(req,res)=>{
    console.log(req.params);
    res.send('Hello world')
})

// app.all('*', (req,res)=>{
//     res.status(404).send(`Url is not found`)
// })

app.listen(5000, (req,res)=>{
    console.log(`Server is running on port 5000...👍`);
})