const express = require("express");
app = express();

const database = require("./config/database");
database();

const cors = require("cors");
app.use(cors());
app.use(express.json())

   
const users = require("./Users/Routes");
app.use("/app",users);


const occasion = require("./Occasion/Routes");
app.use("/app",occasion);


const auth = require("./Auth/Routes");
app.use("/app",auth)


app.listen(4000, () =>{
   console.log("Server connected")
})
