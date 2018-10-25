//===DEPENDENCIES===//
const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
//=================//

const Schema = mongoose.Schema;

const QuestionAnswered = new Schema({
  questionId: {
    type: String,
    required: true
  },
  examId: {
    type: String,
    required: true
  },
  correct: Boolean,
  studentAnswer: String
});


const userSchema = new Schema({
  name: {
    type: String,
    default: ''
  },
  admin: {
    type: Boolean,
    default: false
  },
  pictureUrl: {
    type: String,
    default: ""
  },
  questionsAnswered: [QuestionAnswered]
});

//automatically add username and password with hashing and salt
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);
