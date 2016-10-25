var express = require('express');
var path = require('path');
var router = express.Router();

/* Globals - bad practice, use sparingly */
var users = [];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//create
router.post('/signup', function(req, res, next) {
  var reqBody = req.body;
  var u = { username: reqBody.username, password: reqBody.password };

  if(isUser(u)) {
    var resBody = {
      message: "user already exists - successfully logged in",
      data: users,
      flag: "s"
    }

    res.send(resBody);
  } else {
    users.push(u);

    var resBody = {
      message: "user successfully created",
      data: users,
      flag: "s"
    }

    res.send(resBody);
  }
});

//read
router.post('/login', function(req, res, next) {
  var reqBody = req.body;
  var u = { username: reqBody.username, password: reqBody.password };

  if(isUser(u)) {
    var resBody = {
      message: "user successfully logged in",
      data: users,
      flag: "s"
    }

    res.send(resBody)
  } else {
    var resBody = {
      message: "user does not exist - try again",
      data: [],
      flag: "e"
    }

    res.send(resBody);
  }
})

function isUser(user) {
  for (var i = 0; i < users.length; i++) {
    if(user.username == users[i].username && user.password == users[i].password) {
      return true;
    }
  }
}

module.exports = router;
