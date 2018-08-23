//===DEPENDENCIES===//
const passport = require('passport');
const jwt = require('jsonwebtoken');
const passportJwt = require('passport-jwt');
const User = require('./models/users');
const config = require('./config');
//=================//

//Local username/password check
exports.local = passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//===JWT AUTHENTICATION===//
const ExtractJwt = passportJwt.ExtractJwt;
const JwtStrategy = passportJwt.Strategy;

exports.getToken = (user) => {
  return jwt.sign(user, config.secretKey, {expiresIn: 10800});
};

var jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.secretKey
};

exports.jwtPassport = passport.use(new JwtStrategy(jwtOptions,
  (jwt_payload, next) => {
    console.log("JWT payload: ", jwt_payload);
    User.findOne({_id: jwt_payload._id})
    .then((user) => {
      if (user) {
        return next(null, user);
      } else {
        return next(null, false);
      }
    }).catch((err) => next(err));
  }));

  exports.verifyUser = passport.authenticate('jwt', {session: false});

  exports.verifyAdmin = (req, res, next) => {
    if (req.user.admin) return next();
    else {
      let err = new Error("Not authorized to perform this operation");
      err.status = 403;
      return next(err);
    }
  };
  //=================//
