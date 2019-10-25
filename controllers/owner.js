const express = require('express')

const OwnerApi = require('../models/Owner.js')

const ownerRouter = express.Router()

ownerRouter.get('/edit/:id', (req, res) => {
    OwnerApi.getOneOwner(req.params.id)
        .then((singleOwner) => {
            res.render('editOwnerForm', singleOwner)
        })
})

ownerRouter.get('/new', (req, res) => {
    res.render('createOwnerForm')
})

//getAll
ownerRouter.get('/', (req, res) => {
    OwnerApi.getAllOwners()
        .then((allOwners) => {
            res.render('allOwners', { allOwners })
        })
})

//getOne
ownerRouter.get('/:id', (req, res) => {
    OwnerApi.getOneOwner(req.params.id)
        .then((singleOwner) => {

            res.render('singleOwner', singleOwner)
        })
})

//update

ownerRouter.put('/:id', (req, res) => {
    OwnerApi.updateOwner(req.params.id, req.body)
        .then((updatedOwner) => {
            res.redirect(`/owner/${req.params.id}`)
        })
})


//create
ownerRouter.post('/', (req, res) => {
    OwnerApi.createOwner(req.body)
        .then((createdOwner) => {
            res.redirect('/owner')
        })
})

//delete
ownerRouter.delete('/:id', (req, res) => {
    OwnerApi.deleteOwner(req.params.id)
        .then((deletedOwner) => {
            res.redirect('/owner')
        })
})

module.exports = {
    ownerRouter
}

