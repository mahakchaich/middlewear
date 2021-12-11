const mysql=require("mysql");
const jwt =require ('jsonwebtoken');
const bcrypt =require('bcryptjs');
const async = require("hbs/lib/async");
//MySQL 
const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
 });

exports.subscribe =(req,res)=>{
    console.log(req.body);


    const{firstName,lastName,email,password,country,state}= req.body;
    
    db.query('SELECT email FROM users WHERE email=?',[email],async(error,results)=>{
        if(error){
            console.log(error);
        }
        if(results.length > 0){
            return res.render('subscribe',{
                message:'That email is already in use'
            });
        } 

       let hashedPassword = await bcrypt.hash(password,8);
       console.log(hashedPassword);
       db.query('INSERT INTO users set ?',{firstName :firstName,lastName:lastName,email:email,password:hashedPassword,country:country,state:state},(error,results)=>{
           if(error){
               console.log(error);
           }else{
               console.log(results);
            return res.render('subscribe',{
                message:'User registed'
            });
           }
        });
    });

}