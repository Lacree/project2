const express = require('express')
const app = express()
const methodOverride = require('method-override')


const { userRouter } = require('./controllers/user.js')
const { productRouter } = require('./controllers/product.js')
const { ownerRouter } = require('./controllers/owner.js')
const { indexRouter } = require('./controllers/index.js')

app.use(express.urlencoded({ extended: true }))

app.use(express.json())

app.use(methodOverride('_method'))

app.use(express.static(__dirname + "/public"))

app.set('view engine', 'hbs')

//app.use('/', indexRouter)
app.use('/user', userRouter)
app.use('/product', productRouter)
app.use('/owner', ownerRouter)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`)
})