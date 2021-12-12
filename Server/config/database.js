const mongoose = require("mongoose");

const db_connection = () =>{
   mongoose.connect(`
      mongodb+srv://zahraznacef:admin@cluster0.ovd3l.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
   `
   )
   .then( () =>{
      console.log("Database connected")
   })
   .catch( () =>{
      console.log("Database Failed")
   })
}


module.exports = db_connection;