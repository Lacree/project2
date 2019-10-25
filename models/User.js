const mongoose = require('./connections.js')

const UserSchema = new mongoose.Schema({
    name: String,
    age: Number,
    city: String,
    state: String
})

const UserCollection = mongoose.model('user', UserSchema)

const getAllUsers = () => {
    return UserCollection.find({})
}

const getOneUser = (id) => {
    return UserCollection.findById(id)
}

const createUser = (userData) => {
    return UserCollection.create(userData)
}

const updateUser = (id, userData) => {
    return UserCollection.updateUser({ _id: id })
}

const deleteUser = (id) => {
    return UserCollection.deleteOne({ _id: id })
}

module.exports = {
    getAllUsers,
    getOneUser,
    createUser,
    updateUser,
    deleteUser
}
