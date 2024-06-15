const express = require("express"); 
const router = express.Router();   
const {index} = require("./src/controllers/HomeController"); 

//principal page route
router.get("/", index);  

router.get()


module.exports = router; 