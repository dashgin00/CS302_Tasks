const express = require('express')
const bodyParser = require('body-parser')
require('colors')



const app =express()
const products = [
    {
        id: 1,
        name: 'dashgin',
        price: 'free',
        category: 'game'

    },
    {
        id: 1,
        name: 'dashgin1',
        price: '10AZN',
        category: 'mtr'

    },
    {
        id: 1,
        name: 'dashgin2',
        price: '20$',
        category: 'g'

    }
]
app.use(bodyParser.json())

app.get('/products',(req, res) => {
    res.json(products)
})

app.get('/products/:id', (req, res) => {
    const id = req.params
    const products = products.find(item => item.id === param.id)
    if(products){
        return res.status(200).json(products)
    }else{
        return res.status(404).json('cant find product')
    }
    })

    app.delete('/products:id', (res,req) => {
        const id = req.params
        products = products.filter((products)=> products.id != id)
        return res.json('deleted')
    })

    app.post('/products"id', (res, req) => {
        const {name, price, description} = req.body
        if(!name || !price || !description){
            
            res.statusCode(400).json({message: 'function req'})
        } else{
             const newProduct = {
                id: products.length + 1,
                name,
                price,
                description
             };
             products.push(newProduct)
             res.status(200).json(newProduct)
        }
    });




const PORT = 8000
app.listen(PORT,() => console.log(`Its working: http://localhost:${PORT}`.green.bold))

