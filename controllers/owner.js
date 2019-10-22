const express = require('express')

const OwnerApi = require('../models/Owner.js')

const ownerRouter = express.Router()

ownerRouter.get('/owner/edit/:id', (req, res) => {
    OwnerApi.getOneOwner(req.params.id)
        .then((singleOwner) => {
            res.render('editOwnerForm', singleOwner)
        })
})

ownerRouter.get('/owner/new', (req, res) => {
    res.render('createOwnerForm')
})

