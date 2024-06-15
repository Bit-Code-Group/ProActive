const express = require("express"); 
const router = express.Router();   
const {index} = require("./src/controllers/HomeController"); 
//principal page route
router.get("/", index);  


module.exports = router; 