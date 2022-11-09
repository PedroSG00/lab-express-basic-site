const express = require('express')
const path = require('path')


const app = express()
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

require('./db/ironshop')

const Product = require('./models/product.model')

//Routes


app.get('/', (req, res) => {
    res.render('index')
})

app.get('/tienda', (req, res) => {

    Product
        .find().sort({ price: 1 }).select({ title: 1, description: 1, rate: 1, price: 1, brand: 1, thumbnail: 1 })
        .then(products => {
            res.render('tienda', { product: products })
        })
        .catch(err => console.log(err))
})

app.get('/tienda/:_id', (req, res) => {

    Product
        .findById(req.params._id)
        .then(products => {
            res.render('tienda', { product: products })
        })
        .catch(err => console.log(err))
})




app.listen(5005, () => console.log('OPEN SERVER'))
