const mongoose = require('./owner.js')

const OwnerSchema = new mongoose.Schema({
    name: String,
    created: Number,
    city: String,
    state: String
})

const OwnerCollection = mongoose.model('owner', OwnerSchema)

const getAllOwners = () => {
    return OwnerCollection.find({})
}

const getOneOwner = (id) => {
    return OwnerCollection.findById(id)
}

const createOwner = (ownerData) => {
    return OwnerCollection.create(ownerData)
}

const updateOwner = (id, ownerData) => {
    return OwnerCollection.updateOwner({ _id: id })
}

const deleteOwner = (id) => {
    return OwnerCollection.deleteOne({ _id: id })
}

module.exports = {
    getAllOwners,
    getOneOwner,
    createOwner,
    updateOwner,
    deleteOwner
}