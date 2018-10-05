//===DEPENDENCIES===//
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Questions = require('../models/questions');
const authentication = require('../authentication');
//=================//

const questionRouter = express.Router();
questionRouter.use(bodyParser.json());


//===GET ALL QUESTIONS (OR BASED ON QUERY) ===//
questionRouter.route('/')
.get((req, res, next) => {
  Questions.find(req.query)
  .then((questions) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(questions);
  })
  .catch((err) => next(err));
})

//===POST A QUESTION OR A LIST OF QUESTIONS ===//
.post(authentication.verifyUser, authentication.verifyAdmin, (req, res, next) => {
  Questions.create(req.body)
    .then(questions => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(questions);
    })
    .catch((err) => next(err));
})

//===DELETE ALL QUESTIONS (OR BASED ON QUERY) ===//
.delete(authentication.verifyUser, authentication.verifyAdmin, (req, res, next) => {
  Questions.remove(req.query)
  .then((result) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(result);
  })
  .catch((err) => next(err));
});
//==========================//


//===GET A SPECIFIC QUESTION===//
questionRouter.route('/:questionId')
.get((req, res, next) => {
  Questions.findById(req.params.questionId)
  .then((question) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(question);
  })
  .catch((err) => next(err));
})

//===UPDATE A SPECIFIC QUESTION===//
.put(authentication.verifyUser, authentication.verifyAdmin, (req, res, next) => {
  Questions.findByIdAndUpdate(req.params.questionId, {$set: req.body}, {new: true})
  .then((newQuestion) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(newQuestion);
  })
  .catch((err) => next(err));
})

//===DELETE A SPECIFIC QUESTION===//
.delete(authentication.verifyUser, authentication.verifyAdmin, (req, res, next) => {
  Questions.findByIdAndRemove(req.params.questionId)
  .then((result) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(result);
  })
  .catch((err) => next(err));
});
//================================//

module.exports = questionRouter;
