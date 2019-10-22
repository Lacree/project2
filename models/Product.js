const mongoose = require('./connection..js')

const ProductSchema = new mongoose.Schema({
    name: String,
    ratio: Number,
    company: String,
    Notes: String
})

const ProductCollection = mongoose.model('product', ProductSchema)

const getAllProducts = () => {
    return ProductCollection.find({})
}

const getOneProduct = (id) => {
    return ProductCollection.findById(id)
}

const createProduct = (productData) => {
    return ProductCollection.create(productData)
}

const updateProduct = (id, productData) => {
    return ProductCollection.updateProduct({ _id: id })
}

const deleteProduct = (id) => {
    return ProductCollection.deleteOne({ _id: id })
}

module.exports = {
    getAllProducts,
    getOneProduct,
    createProduct,
    updateProduct,
    deleteProduct
}