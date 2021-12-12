const mongoose = require("mongoose");

const Schema = mongoose.Schema;


module.exports = mongoose.model('occasion', new Schema({
   
   img : {
         type:String,
         required:true},

   title : {
         type:String,
         required:true},

   price : {
         type:String,
         required:true},

   description : {
         type:String,
         required:true},

   year : {
         type:String,
         required:true},

   km : {
         type:String,
         required:true},

   location : {
         type:String,
         required:true},

   energy : {
         type:String,
         required:true},

   handletype : {
         type:String,
         required:true},

}))