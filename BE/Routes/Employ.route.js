const express = require("express");


const {  UsersModel} =require("../Model/Employ.model");


const UsersRouter = express.Router();



UsersRouter.get("/", async(req,res) => {
    try{
        const Employees=await  UsersModel.find()
        if(Employees){
            res.status(200).json({Employees})
        }else{
            res.status(400).json({msg:"Post not Found"})
        }
    }catch(err){
        res.status(400).json({error:err})
    }
})


UsersRouter.post("/", async(req,res) => {
    try{
     console.log(req.body);
     const post = new  UsersModel(req.body);
     await post.save();
     res.json({msg: "Post create successfully"});     
    }catch(err){
     res.json(err);
    }
 })


UsersRouter.patch("/:id", async (req,res) => {
    try{
       const postID = req.params.id;
        await  UsersModel.findByIdAndUpdate({_id:postID}, req.body);
        res.status(200).json({"msg": "updated"})
    }catch(err){
        res.status(400).send(err);
    }
})


UsersRouter.delete("/:id", async(req,res) => {
    try{
        const postID = req.params.id;
         await  UsersModel.findByIdAndDelete({_id:postID}, req.body);
         res.status(200).json({"msg": "title has been deleted"})
     }catch(err){
         res.status(400).send(err);
     }
})



UsersRouter.get("/:id",async(req,res)=>{ // to get a particular post
    const {id}=req.params;
    try {
        const post = await UsersModel.findOne({ _id: id });
        res.status(200).send(post)
    } catch (error) {
        res.status(500).send({ "error": "Internal Server Error" })
    }
})


module.exports = {
  UsersRouter
}