const express = require('express')

const ProductApi = require('../models/Product.js')

const productRouter = express.Router()

prodcutRouter.get('/product/edit/:id', (req, res) => {
    ProductApi.getOneProduct(req.params.id)
        .then((singleProduct) => {
            res.render('editProductForm', singleProduct)
        })
})

productRouter.get('/product/new', (req, res) => {
    res.render('createProductForm')
})

//getAll
productRouter.get('/product', (req, res) => {
    ProductApi.getAllProducts()
        .then((allProducts) => {
            res.render('allProducts', { allProducts })
        })
})

//getOne
productRouter.get('/product/:id', (req, res) => {
    ProductApi.getOneProduct(req.params.id)
        .then((singleProduct) => {

            res.render('singleProduct', singleProduct)
        })
})

//update

productRouter.put('/product/:id', (req, res) => {
    ProductApi.updateProduct(req.params.id, req.body)
        .then((updateProduct) => {
            res.redirect(`/product/${req.params.id}`)
        })
})


//create
productRouter.post('/product', (req, res) => {
    ProductApi.createProduct(req.body)
        .then((createdProduct) => {
            res.redirect('/product')
        })
})

//delete
productRouter.delete('/product/:id', (req, res) => {
    ProductApi.deleteProduct(req.params.id)
        .then((deletedProduct) => {
            res.redirect('/product')
        })
})

module.exports = {
    productRouter
}