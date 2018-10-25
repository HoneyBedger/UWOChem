//===DEPENDENCIES===//
const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const passport = require('passport');
const authentication = require('../authentication');
const User = require('../models/users');
const cors = require('./cors');
//=================//

var userRouter = express.Router();
userRouter.use(bodyParser.json());

//===GET USER LISTINGS===//
userRouter.get('/', authentication.verifyUser, authentication.verifyAdmin, (req, res, next) => {
  User.find(req.query)
  .then((users) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(users);
  })
  .catch((err) => next(err));
});
//=================//


//===SING UP===//
userRouter.post('/signup', (req, res, next) => {
  User.register(new User({username: req.body.username}), req.body.password,
    (err, user) => {
      res.setHeader('Content-Type', 'application/json');
      if (err) {
        res.status(401).json({err, success: false});
      } else {
        if (req.body.name) {
          user.name = req.body.name;
        }
        user.save()
        .then((user) => {
          res.status(200).json({err: null, success: true});
        })
        .catch((err) => res.status(401).json({err, success: false}));
      }
  });
});
//=================//


//===LOGIN===//
userRouter.post('/login', cors.corsWithOptions, passport.authenticate('local'), (req, res, next) => {
  if (!req.user) res.send(401, 'Not Authorized');
  let token = authentication.getToken({_id: req.user._id});
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json({err: null, user: req.user, token});
});
//=================//


//===OAuth LOGINs===//
userRouter.post('/facebook',
  passport.authenticate('facebook-token', {session: false}),
  (req, res) => {
    if (!req.user) res.send(401, 'Not Authorized');
    let token = authentication.getToken({_id: req.user._id});
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json({err: null, user: req.user, token});
  }
);

userRouter.post('/google',
  (req, res) => {
    request(`https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${req.body.id_token}`, { json: true },
    (err, response, body) => {
      if (err) return res.send(401, {message: err.message});
      let pictureUrl = response.body.picture;
      User.findOne({username: response.body.sub})
      .then((user) => {
        if (user) user.set({pictureUrl: pictureUrl}); //this user was already registered with fb
        else { //register new user
          user = new User({
            username: response.body.sub,
            name: response.body.name,
            pictureUrl: pictureUrl
          });
        }
        user.save()
        .then((user) => {
          let token = authentication.getToken({_id: user._id});
          res.status(200).json({err: null, user, token});
        })
        .catch((err) => {
          return res.send(500, {message: err.message});});
      }).catch((err) => res.send(500, {message: err.message}));
    })
  }
);

//===SAVE PROGRESS===//
userRouter.post('/questions', authentication.verifyUser, (req, res, next) => {
  User.findOne({username: req.body.username}).
  then(user => {
    if (!user) return nexr(err);
    let questions = [...user.questionsAnswered];
    req.body.questions.forEach(question => {
      let oldQuestion = questions.filter(q => q.questionId === question.questionId)[0];
      if (oldQuestion) {
        let idx = questions.indexOf(oldQuestion);
        questions.splice(idx, 1, question);
      } else questions.push(question);
    });
    user.questionsAnswered = questions;
    user.save()
    .then(user => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(user);
    })
    .catch(err => next(err));
  })
  .catch(err => next(err));
});
//===================//


//===DELETE PROGRESS===//
userRouter.delete('/questions', authentication.verifyUser, (req, res, next) => {
  User.findOne({username: req.body.username}).
  then(user => {
    if (!user) return nexr(err);
    let questions = [...user.questionsAnswered];
    let questionsToRemove = req.body.questionIds;
    for (let i = 0; i < questions.length; i++) {
      let id = questions[i].questionId;
      if (questionsToRemove.includes(id)){
        questions.splice(i, 1);
        i--;
      }
    }
    user.questionsAnswered = questions;
    user.save()
    .then(user => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(user);
    })
    .catch(err => next(err));
  })
  .catch(err => next(err));
});
//=====================//

//===LOGOUT===//
userRouter.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
})
//=================//


module.exports = userRouter;
