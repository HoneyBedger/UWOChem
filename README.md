# UWOChem
A pet website project for practicing chemistry courses. Built with Bootstrap 4, React, Node.js, and MongoDB

This app is (deployed to Heroku)[https://uwochem.herokuapp.com/].

### Code structure
#### server
The server is a usual REST one built with express-generator: setup in /bin/www.js and app.js, routing in /routes, MongoDB schemas in /models.
authentication.js is a bunch of helpers for authentication (username-password, jwt, and OAuth).

#### client
/client/src/components/main handles routing and manages some global state (about user being logged in). There is one protected route, /profile.
Practice test components are in /client/src/components/Practice, and most of the logic for it is in /client/src/components/Practice/Exam.jsx 
(saving progress locally and to DB, checking answers etc.).
