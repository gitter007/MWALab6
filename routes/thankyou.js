/*********************************************** 
  CS572 - MODERN WEB APPLICATION PROGRAMMING
  MUM
  Student: #985803
  Lecture 5 / Exercise 
************************************************/
var express = require('express');
var router = express.Router();
//const expressSession = require('express-session');

/* GET home page. */
router.get('/', function(req, res, next) {
  let message = req.session['success'];
  console.log(message);
  if(message){
    req.session['success']=null;
    res.send(message);
    res.end();
    }
  //res.render('index', { title: 'Thank you', message:data.message });
  else{ 
    res.send('Please try again from valid link');
    res.end();
    }
});

module.exports = router;
