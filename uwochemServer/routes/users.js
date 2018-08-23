//===DEPENDENCIES===//
const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const authentication = require('../authentication');
const User = require('../models/users');
//=================//

var userRouter = express.Router();
userRouter.use(bodyParser.json());

//===GET USER LISTINGS===//
userRouter.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
//=================//


//===SING UP===//
userRouter.post('/signup', (req, res, next) => {
  User.register(new User({username: req.body.username}), req.body.password,
    (err) => {
      res.setHeader('Content-Type', 'application/json');
      if (err) {
        res.status(401).json({err, success: false});
      } else {
        res.status(200).json({err: null, success: true});
      }
  });
});
//=================//


//===LOGIN===//
userRouter.post('/login', passport.authenticate('local'), (req, res, next) => {
  let token = authentication.getToken({_id: req.user._id});
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json({err: null, success: true, token});
});
//=================//


//===LOGOUT===//
userRouter.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
})
//=================//


module.exports = userRouter;
