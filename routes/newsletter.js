/*********************************************** 
  CS572 - MODERN WEB APPLICATION PROGRAMMING
  MUM
  Student: #985803
  Lecture 5 / Exercise 
************************************************/

var express = require('express');
var router = express.Router();
var util = require('util')
var fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('newsletter', {title: 'Newsletter subscription', errors: null, csrfToken: req.csrfToken()});

});

router.post('/', function(req, res, next) {
	//check express-validator
	req.assert('email', 'Email is required').notEmpty();
  req.checkBody("email", "Enter a valid email address.").isEmail();

	var errors = req.validationErrors();

	if(errors){
		console.log(JSON.stringify(errors));
    // res.send(errors);
    res.render('errorCustom', { message:'Error in input', error: errors })
	  //res.render('error', {error: errors, csrfToken: req.csrfToken()});
	}
	else{
    // var data = req.body;
    // data.ip = req.ip;
    
    //var writable = fs.createWriteStream('subscribers.txt');
    // writable.write(JSON.stringify(data));
    var email = req.body.email;
    var logStream = fs.createWriteStream('subscribers.txt', {'flags': 'a'});
    logStream.write(email);
    logStream.write('\n');
    //var email = req.body.email;
    //console.log(email);
    email = util.format('Your email %s has been added successfully to our subcribers list.',email)
    // res.send(email);
    // res.end();
    req.session['success'] = email;
    res.redirect('/thankyou');
	}
});


module.exports = router;
