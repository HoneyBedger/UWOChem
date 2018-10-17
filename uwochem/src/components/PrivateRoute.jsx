import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';

function PrivateRoute({component: Component, ...rest}) {
  console.log({...rest}.location);

  return (
    <Route {...rest} render={(props) => {
      if (window.localStorage.getItem('userToken')) {
        return <Component {...props} />;
      } else {
        rest.openLoginModal();
        return (<Redirect to={{
            pathname: '/home/login',
            state: {from: rest.location}
          }} />);
      }
    }}/>
  );
}

export default PrivateRoute;
