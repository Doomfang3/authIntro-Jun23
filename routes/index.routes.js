const express = require('express')
const { isLoggedIn, isAdmin } = require('../middlewares/route-guard.middleware')
const router = express.Router()

/* GET home page */
router.get('/', (req, res, next) => {
  console.log(req.session)

  res.render('index')
})

/* GET profile page */
router.get('/profile', isLoggedIn, isAdmin, (req, res, next) => {
  res.render('profile', { user: req.session.user })
})

module.exports = router
