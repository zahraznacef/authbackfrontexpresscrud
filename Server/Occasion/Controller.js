const OCCASION = require("./Model");


module.exports = {
   addoccasion : async (req,res) =>{
      try{
         const
            img = req.body.img,
            title = req.body.title,
            price = req.body.price,
            description = req.body.description,
            year = req.body.year,
            km = req.body.km,
            location = req.body.location,
            energy = req.body.energy,
            handletype = req.body.handletype
         const occasion = await new OCCASION({
            img,
            title,
            price,
            description,
            year,
            km,
            location,
            energy,
            handletype
         })
         await occasion.save();
            res.json(occasion);
         }
         catch (err){
            console.log(err)
         }
      },
   
   getalloccasions : async (req,res) =>{
      try{
         const occasion = await OCCASION.find();
         res.json(occasion)
      }
      catch (err){
         console.log(err)
      }
   },

   deleteoccasion : async (req,res) =>{
      try{
         const occasion = await OCCASION.findByIdAndDelete(req.params.id);
         res.json(occasion);
      }
      catch (err){
         console.log(err)
      }
   },

   updateoccasion : async (req,res) =>{
      try{
         const occasion = await OCCASION.findByIdAndUpdate(req.params.id,req.body,{new:true});
         res.json(occasion);
      }
      catch (err){
         console.log(err)
      }
   },

   getoneoccasion : async (req,res) =>{
      try{
         const occasion = await OCCASION.findById(req.params.id);
         res.json(occasion)
      }
      catch (err){
         console.log(err)
      }
   }
}
   