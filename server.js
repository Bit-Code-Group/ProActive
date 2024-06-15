const express = require("express"); 
const mongoose = require("mongoose"); 
const flash = require("connect-flash");    
const {middlewareGlobal} = require("src/middlewares/middlewareGlobal")
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




app.use(flash()); 

app.use(middlewareGlobal); 
