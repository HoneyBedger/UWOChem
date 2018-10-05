//===DEPENDENCIES===//
const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
//=================//

const Schema = mongoose.Schema;
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
  }
});

//automatically add username and password with hashing and salt
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);
