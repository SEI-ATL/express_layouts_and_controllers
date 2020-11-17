const hatesController = require('express').Router()

hatesController.get('/animals', (req, res) => {
  const animals = ['giraffe', 'aligator', 'peacock', 'unicorn']

  res.render('hateAnimals', { animals })
})

hatesController.get('/foods', (req, res) => {
  const foods = ['key lime pie', 'tacos', 'quiche', 'ice cream float']

  res.render('hateFoods', { foods })
})


module.exports = hatesController