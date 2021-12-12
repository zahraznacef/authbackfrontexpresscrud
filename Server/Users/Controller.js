const USER = require("./Model");


module.exports = {
   adduser : async (req,res) =>{
      try{
         const
            fullname = req.body.fullname,
            email = req.body.email,
            password = req.body.password,
            phonenumber = req.body.phonenumber
         const user = await new USER({
            fullname,
            email,
            password,
            phonenumber
         })
         await user.save();
            res.json(user);
         }
         catch (err){
            console.log(err)
         }
      },
   
   getallusers : async (req,res) =>{
      try{
         const user = await USER.find();
         res.json(user)
      }
      catch (err){
         console.log(err)
      }
   },

   deleteuser : async (req,res) =>{
      try{
         const user = await USER.findByIdAndDelete(req.params.id);
         res.json(user);
      }
      catch (err){
         console.log(err)
      }
   },

   updateuser : async (req,res) =>{
      try{
         const user = await USER.findByIdAndUpdate(req.params.id,req.body,{new:true});
         res.json(user);
      }
      catch (err){
         console.log(err)
      }
   },

   getoneuser : async (req,res) =>{
      try{
         const user = await USER.findById(req.params.id);
         res.json(user)
      }
      catch (err){
         console.log(err)
      }
   }
}
   