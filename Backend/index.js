require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI) // clean and warning-free
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));



const User =require('./models/user.model');
const Note=require('./models/note.model');


const express = require("express");
const cors = require("cors");

const app = express();
app.set('json spaces', 2);
 

const jwt=require('jsonwebtoken');
const {authenticateToken} = require('./utilities');


app.use(express.json());



const allowedOrigins = [
  "https://notes-vault-delta.vercel.app", 
  "http://localhost:5173",               
];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);


app.get("/", (req, res) => {
  res.json({ data: "hello" });
});

app.post("/create-account",async (req,res)=>{
  const {fullName,email,password}= req.body;
  if(!fullName)
  {
    return res.status(400).json({error:true,message:"Full name is required"});
  }

  if(!email){
    return res.status(400).json({error:true,message:"Email is required"});
  }
  
  if(!password){
    return res.status(400).json({error:true,message:"Password is required"});
  }
  const isUser=await User.findOne({email: email});

  if(isUser)
  {
    return res.json({error:true,message:'User already existed'});
  }

  const user=new User({fullName,email,password,});
  await user.save();

  const accessToken=jwt.sign({user},process.env.ACCESS_TOKEN_SECRET,{expiresIn:"3600m",});

  return res.json({error:false,user,accessToken,message:"Registration Successful",});

  
});


app.post("/login",async (req,res)=>{
  const {email,password}=req.body;
  if(!email){
    return res.status(400).json({message:"Email is required"});
  }
  if(!password)
  {
    return res.status(400).json({message:"Password is required"});
  }

  const userInfo=await User.findOne({email:email});

  if(!userInfo)
  {
    return res.status(400).json({message:"User not found"});
  }

  if(userInfo.email==email && userInfo.password==password )
  {
    const user={user:userInfo};
    const accessToken=jwt.sign(user,process.env.ACCESS_TOKEN_SECRET,{
      expiresIn:"3600m",
    });

    return res.json({
      error:false,
      message:"Login Successful",
      email,
      accessToken,
    });
  }
  else{
    return res.status(400).json({
      error:true,
      message:"Invalid Credentials",
    });
  };
});

app.get("/get-user",authenticateToken,async(req,res)=>{
  const {user} =req.user;
  const isUser =await User.findOne({_id:user._id});

  if(!isUser){
    return res.sendStatus(401);
  }
  return res.json({user:{fullName:isUser.fullName,email:isUser.email,"_id":isUser._id,createdOn:isUser.createdOn},
    message:""});
})

app.post("/add-note",authenticateToken,async(req,res)=>{
  const {title,content,tags}=req.body;
  const { user}=req.user;

  if(!title)
  {
    return res.status(400).json({error:true,message:"Title is required"});
  }
  if(!content)
  {
    return res.status(400).json({error:true,message:"Content is required"});
  }

  try{
    const note =new Note({
      title,
      content,
      tags:tags|| [],
      userId:user._id,});
await note.save();
return res.json({
  error:false,
  note,
  message:"Note added successfully",
});
}
catch(error)
{
  return res.status(500).json({error:true,message:'Internal server error'});
}
  
});


app.put("/edit-note/:noteId",authenticateToken,async(req,res)=>{
  const noteId=req.params.noteId;
  const {title,content,tags,isPinned}=req.body;
  const {user}= req.user;
  if(!title && !content && !tags)
  {
    return res.status(400).json({error:true,message:"No changes Provided"});
  }

  try{
    const note=await Note.findOne({_id:noteId,userId:user._id});
    if(!note)
    {
      return res.status(404).json({error:true,message:"Note not found"});
    }

    if(title) note.title=title;
    if(content) note.content=content;
    if(tags) note.tags=tags;
    if(isPinned) note.isPinned=isPinned;
  

    await note.save();
    return res.json({
      error:false,
      note,
      message:"Note updated successfuly"
    });
  }
  catch(error){
    return res.status(500).json({
      error:true,
      message:"Internal server Error"
    });
  };
});


app.get("/get-all-notes",authenticateToken,async(req,res)=>{
  const {user}=req.user;
  try{
    const notes = await Note.find({userId:user._id}).sort({isPinned:-1});
    return res.status(200).json({error:false,notes,message:"All notes received successfully"});
  }
  catch(error)
  {
    return res.status(500).json({
      error:true,message:"Internal Server Error",
    });
  }
});

app.delete("/delete-note/:noteId",authenticateToken,async(req,res)=>{
const noteId= req.params.noteId;
const {user}= req.user;
try{
  const note = await Note.findOne({_id:noteId,userId:user._id});

  if(!note){
    return res.status(404).json({error:true,message:"Note not found"});
  };
  await Note.deleteOne({_id:noteId,userId:user._id});
  return res.json({erro:false,message:"Note deleted successfully"});
}

catch(eroor){
    return res.status(500).json({error:true,message:"Iternal Server Error"});
}
})

app.put("/update-note-pinned/:noteId",authenticateToken,async(req,res)=>{
  const noteId=req.params.noteId;
  const {isPinned}=req.body;
  const {user}= req.user;
  
  try{
    const note=await Note.findOne({_id:noteId,userId:user._id});
    if(!note)
    {
      return res.status(404).json({error:true,message:"Note not found"});
    }

   note.isPinned=isPinned ;
  

    await note.save();
    return res.json({
      error:false,
      note,
      message:"Note updated successfuly"
    });
  }
  catch(error){
    return res.status(500).json({
      error:true,
      message:"Internal server Error"
    });
  };
})

app.get("/search-notes/", authenticateToken, async (req, res) => {
  const user = req.user;
  const { query } = req.query;

  if (!query || query.trim() === "") {
    return res.status(400).json({
      error: true,
      message: "Search query is required.",
    });
  }

  try {
    const matchingNotes = await Note.find({
      userId: user._id,
      $or: [
        { title: { $regex: new RegExp(query, "i") } },
        { content: { $regex: new RegExp(query, "i") } },
      ],
    });

    return res.json({
      error: false,
      notes: matchingNotes,
      message: "Notes matching the search query retrieved successfully.",
    });
  } catch (error) {
    console.error("Search error:", error.message);
    return res.status(500).json({
      error: true,
      message: "Internal Server Error!",
    });
  }
});


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


module.exports = app;
















