const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const questionSchema = new Schema({
  courseId: {
    type: String,
    required: true,
    match: /^130[12]$/
  },
  examName: {
    type: String,
    required: true
  },
  chapterId: {
    type: Number,
    required: true,
    min: 0
  },
  idInExam: {
    type: Number,
    required: true,
    min: 1
  },
  type: {
    type: String,
    required: true,
    match: /^(numeric|string|MC|MS|bins|order)$/
  },
  questionBody: {
    type: String,
    required: true
  }
});

const Questions = mongoose.model("Question", questionSchema);

module.exports = Questions;
