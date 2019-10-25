const express = require('express')

const UserApi = require('../models/User.js')

const userRouter = express.Router()

userRouter.get('/edit/:id', (req, res) => {
    UserApi.getOneUser(req.params.id)
        .then((singleUser) => {
            res.render('editUserForm', singleUser)
        })
})

userRouter.get('/new', (req, res) => {
    res.render('createUserForm')
})

//getAll
userRouter.get('/', (req, res) => {
    UserApi.getAllUsers()
        .then((allUsers) => {
            res.render('allusers', { allUsers })
        })
})

//getOne
userRouter.get('/:id', (req, res) => {
    UserApi.getOneUser(req.params.id)
        .then((singleUser) => {

            res.render('singleUser', singleUser)
        })
})

//update

userRouter.put('/:id', (req, res) => {
    UserApi.updateUser(req.params.id, req.body)
        .then((updateUser) => {
            res.redirect(`/User/${req.params.id}`)
        })
})


//create
userRouter.post('/', (req, res) => {
    UserApi.createUser(req.body)
        .then((createdUser) => {
            res.redirect('/user')
        })
})

//delete
userRouter.delete('/:id', (req, res) => {
    UserApi.deleteUser(req.params.id)
        .then((deletedUser) => {
            res.redirect('/user')
        })
})

module.exports = {
    userRouter
}
