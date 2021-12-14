const express =require('express');

const router = express.Router();
const User=require('./user');

const user=new User();


// Post login data
router.post('/login1', (req, res, next) => {
  // The data sent from the user are stored in the req.body object.
  // call our login function and it will return the result(the user data).
  user.login(req.body.email, req.body.password, function(result) {
      if(result) {
          // Store the user data in a session.
         // req.session.user = result;
         // req.session.opp = 1;
          // redirect the user to the home page.
          res.redirect('/');
      }else {
          // if the login function returns null send this error message back to the user.
          res.send('Email/Password incorrect!');
      }
  })

});



// Get the index page
router.get('/',(req,res)=>{
  res.render('index');
});


router.get('/subscribe',(req,res)=>{
  res.render('subscribe');
});
router.get('/login',(req,res)=>{
   res.render('login');
  });


module.exports = router;