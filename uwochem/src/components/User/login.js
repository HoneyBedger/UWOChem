const login = {};

login.attachToComponent = (component) => {
  login.component = component;
};

login.saveProgress = false;

login.setSaveProgress = (saveProgress) => {
  login.saveProgress = saveProgress;
};

login.login = (res, callback) => {
  if (res.status === 401) {
    callback({success: false, err: new Error("Sorry, your credentials do not match our data.")});
    return;
  } else if (!res.ok) {
    callback({success: false, err: new Error("Sorry, something went wrong. Please try again later.")});
    return;
  } else {
    res.json()
    .then(res => {
      if (res.err) {
        callback({success: false, err: new Error("Sorry, something went wrong. Please try again later.")});
        return;
      } else {
        window.localStorage.setItem('userToken', res.token.toString());
        let user = res.user;
        if (login.saveProgress && window.localStorage.getItem('user')) {
          let questions = JSON.parse(window.localStorage.getItem('user')).questionsAnswered;
          let username = res.user.username;
          fetch('/users/questions', {
            method: 'post',
            headers: {'Content-Type':'application/json', 'Authorization': 'bearer ' + res.token},
            body: JSON.stringify({username, questions})})
          .then(res => {
            res.json().then(newUser => {
              window.localStorage.setItem('user', JSON.stringify(newUser));
            });
          });
        } else {
          window.localStorage.setItem('user', JSON.stringify(user));
        }
        if (login.component) {
          login.component.setState({loggedIn: true});
        }
        callback({success: true, err: null});
        return;
      }
    })
    .catch(err => {
      callback({success: false, err})
      return;
    });
  }
};

login.logout = () => {
  fetch('/users/logout');
  window.localStorage.clear();
  if (login.component) {
    login.component.setState({loggedIn: false});
  }
};


export default login;
