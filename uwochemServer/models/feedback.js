const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const feedbackSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  email: {
    type: String,
    match: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/
  }
});

const Feedback = mongoose.model("Feedback", feedbackSchema);

module.exports = Feedback;
