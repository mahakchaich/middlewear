const express =require("express");
const mysql=require("mysql");
const dotenv=require('dotenv');
const  path = require('path');



dotenv.config({path:'./.env'});

const app=express();



app.set('view engine','hbs');

//MySQL 
const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
 });



const publicDirctory =path.join(__dirname,'./public');
app.use(express.static(publicDirctory));


// for body parser. to collect data that sent from the client
app.use(express.urlencoded({extended:false}));
app.use(express.json());

db.connect(()=>{
  console.log('Database connected!')
})


//Define Route
app.use('/',require('./routes/pages'));
app.use('/auth',require('./routes/auth'));


app.listen(5001,() =>{
    console.log("server started on port 5001");
})