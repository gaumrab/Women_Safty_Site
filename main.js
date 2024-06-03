const mysql = require("mysql");
const express = require("express");
const session = require("express-session");

// Data Base Connectivity: 
const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "WomenSafetyProject"
});

conn.connect((err,res)=>{
   if(!err){
       console.log("Connection Has Been Established Successfully.")
   }else{
    console.log("Connection Error Occur");
   }
});

// Express app is here:
let app = express();
app.set("view engine","ejs");
app.use(express.static('public'));

// create the session:
app.use(session({
    secret: "SecretKey",
    resave: true,
    saveUninitialized: true
}));


// Home Page Work:
app.get("/",(req,res)=>{
    if(req.session.username){
        res.render("Home");
    }else{
        res.redirect("/login");
    }
});

// LogIn Page Work Is Here:
app.get("/login",(req,res)=>{
    if(!req.query.submit){
        console.log("when not clicked on submit button")
        res.render("loginPage");
    }else{
        console.log("when clicked on submit button")
        let username = req.query.username;
        let password = req.query.password;
        conn.query(`select * from UserInfo`,(err,Res)=>{
            if(!err){
                let ans = "";
                Res.forEach(element => {
                    if(username == element.name && password == element.password){
                        req.session.username = username;
                        res.redirect("/");
                        ans = "found";
                    }
                });
                if(ans != "found"){
                    console.log("wrong values")
                    res.render("loginPage");
                }
            }else{
                console.log("error")
            }
        });
    }
});


// Here Is Our Work Of SignUp Page :
app.get("/signup",(req,res)=>{
    res.render("signupPage");
    if(req.query.submit){
      let name = req.query.name;
      let email = req.query.email;
      let ph = req.query.ph;
      let pass = req.query.pass;
      let cpass = req.query.cpass;
      let age = req.query.age;
     
      conn.query(`insert into UserInfo values('${name}','${email}','${ph}','${pass}','${cpass}','${age}')`,(err,res)=>{
          if(!err){
              console.log("Data is Push into The DataBase Successfully.");
          }else{
              console.log("Data is ..not.... Push into The DataBase Successfully.");
          }
      });
    }
});


// Protection Tips:
app.get("/blog",(req,res)=>{
   res.render("blog");
});
app.get("/page1",(req,res)=>{
    res.render("page1");
 });
 

app.get("/emergency",(req,res)=>{
    res.render("emergency",{name:req.session.username});
});


app.get("/about",(req,res)=>{
    res.render("about");
});
app.get("/contact",(req,res)=>{
    res.render("contact");
});

app.listen(4000);