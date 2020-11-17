// import stuff
const express = require('express')
const app = express()
const ejsLayouts = require('express-ejs-layouts')

const favesController = require('./controllers/favesController')
const hatesController = require('./controllers/hatesController')

app.set('view engine', 'ejs')
app.use(ejsLayouts)


// create our routes
app.get('/', (req, res) => {
  res.render('index')
})

app.use('/faves', favesController)
app.use('/hates', hatesController)

// app.listen
app.listen(8000, () => {
  console.log('server has started!');
})
