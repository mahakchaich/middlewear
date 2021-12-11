const express =require('express');

const router = express.Router();


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