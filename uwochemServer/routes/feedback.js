//===DEPENDENCIES===//
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Feedback = require('../models/feedback');
//=================//

const feedbackRouter = express.Router();
feedbackRouter.use(bodyParser.json());


//===GET ALL FEEDBACK (OR BASED ON QUERY) ===//
feedbackRouter.route('/')
.get((req, res, next) => {
  Feedback.find(req.query)
  .then((feedback) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(feedback);
  })
  .catch((err) => next(err));
})

//===POST FEEDBACK ===//
.post((req, res, next) => {
  Feedback.create(req.body)
    .then(feedback => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(feedback);
    })
    .catch((err) => next(err));
});

module.exports = feedbackRouter;
