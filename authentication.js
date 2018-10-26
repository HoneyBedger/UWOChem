//===DEPENDENCIES===//
const passport = require('passport');
const jwt = require('jsonwebtoken');
const passportJwt = require('passport-jwt');
const FacebookTokenStrategy = require('passport-facebook-token');
const graph = require('fbgraph');
const GoogleTokenStrategy = require('passport-token-google').Strategy;
const User = require('./models/users');
//=================//

//Local username/password check
exports.local = passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//===JWT AUTHENTICATION===//
const ExtractJwt = passportJwt.ExtractJwt;
const JwtStrategy = passportJwt.Strategy;

exports.getToken = (user) => {
  return jwt.sign(user, process.env.JWT_SECRET, {expiresIn: 60*60*10});
};

var jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET
};

exports.jwtPassport = passport.use(new JwtStrategy(jwtOptions,
  (jwt_payload, next) => {
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


  //===FACEBOOK OAuth===//
  exports.facebookPassport = passport.use(new FacebookTokenStrategy({
    clientID: process.env.FB_ID,
    clientSecret: process.env.FB_SECRET
  }, (accessToken, refreshToken, profile, done) => {
    graph.setAccessToken(accessToken);
    graph.get(profile.id + "?fields=picture", (err, res) => {
      let pictureUrl = !err && res.picture.data.url;
      User.findOne({username: profile.id})
      .then((user) => {
        if (user) user.set({pictureUrl: pictureUrl}); //this user was already registered with fb
        else { //register new user
          user = new User({
            username: profile.id,
            name: profile.displayName,
            pictureUrl: pictureUrl,
            questionsAnswered: []
          });
        }
        user.save()
        .then((res) => process.nextTick(() => done(null, user)))
        .catch((err) => done(err, false));
      })
      .catch((err) => next(err, false));
    });
  }));
  //=================//
