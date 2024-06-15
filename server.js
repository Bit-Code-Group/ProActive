const express = require("express"); 
const mongoose = require("mongoose"); 
const flash = require("connect-flash");     
const  session = require("express-session");  
const  MongoStore = require("connect-mongo"); 
const {middlewareGlobal} = require("./src/middlewares/middlewareGlobal"); 
const path = require("path"); 
require("dotenv").config(); 
const app = express();  

app.use(express.urlencoded({extended:true})); 
app.use(express.static("public")); 
app.set("view engine","ejs"); 
app.set("views",path.resolve(__dirname,"src","views"))  

mongoose.connect(process.env.CONNECTION_URL).then(()=>{ 
    console.log("Conectando..."); 
    app.emit("Connected"); 
}) 

app.on("Connected",()=>{
    app.listen(process.env.PORT,()=>{
      console.log("Conectado: http://localhost:3000/")      
    })
})    

const sessionOptions = session( {
  secret: "Sessions Aplication", 
  resave: false, 
  saveUninitialized: false, 
  store: MongoStore.create({mongoUrl:process.env.CONNECTION_URL}), 
  cookie: {
    httpOnly: true, 
    maxAge: 1000* 60 * 7 *1000
  } 

})



app.use(sessionOptions); 
app.use(flash()); 
app.use(middlewareGlobal); 
