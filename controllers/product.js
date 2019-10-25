const express = require('express')

const ProductApi = require('../models/Product.js')

const productRouter = express.Router()

productRouter.get('/edit/:id', (req, res) => {
    ProductApi.getOneProduct(req.params.id)
        .then((singleProduct) => {
            res.render('editProductForm', singleProduct)
        })
})

productRouter.get('/new', (req, res) => {
    res.render('createProductForm')
})

//getAll
productRouter.get('/', (req, res) => {
    ProductApi.getAllProducts()
        .then((allProducts) => {
            res.render('allproducts', { allProducts })
        })
})

//getOne
productRouter.get('/:id', (req, res) => {
    ProductApi.getOneProduct(req.params.id)
        .then((singleProduct) => {

            res.render('singleProduct', singleProduct)
        })
})

//update

productRouter.put('/:id', (req, res) => {
    ProductApi.updateProduct(req.params.id, req.body)
        .then((updateProduct) => {
            res.redirect(`/Product/${req.params.id}`)
        })
})


//create
productRouter.post('/', (req, res) => {
    ProductApi.createProduct(req.body)
        .then((createdProduct) => {
            res.redirect('/product')
        })
})

//delete
productRouter.delete('/:id', (req, res) => {
    ProductApi.deleteProduct(req.params.id)
        .then((deletedProduct) => {
            res.redirect('/product')
        })
})

module.exports = {
    productRouter
}
