const express = require('express')

const UserApi = require('../models/User.js')

const userRouter = express.Router()

userRouter.get('/user/edit/:id', (req, res) => {
    UserApi.getOneUser(req.params.id)
        .then((singleUser) => {
            res.render('editUserForm', singleUser)
        })
})

userRouter.get('/user/new', (req, res) => {
    res.render('createUserForm')
})

//getAll
userRouter.get('/user', (req, res) => {
    UserApi.getAllUsers()
        .then((allUsers) => {
            res.render('allUsers', { allUsers })
        })
})

//getOne
userRouter.get('/user/:id', (req, res) => {
    UserApi.getOneUser(req.params.id)
        .then((singleUser) => {

            res.render('singleUser', singleUser)
        })
})

//update

userRouter.put('/user/:id', (req, res) => {
    UserApi.updateUser(req.params.id, req.body)
        .then((updateUser) => {
            res.redirect(`/user/${req.params.id}`)
        })
})


//create
userRouter.post('/user', (req, res) => {
    UserApi.createUser(req.body)
        .then((createdUser) => {
            res.redirect('/user')
        })
})

//delete
userRouter.delete('/user/:id', (req, res) => {
    UserApi.deleteUser(req.params.id)
        .then((deletedUser) => {
            res.redirect('/user')
        })
})

module.exports = {
    userRouter
}
