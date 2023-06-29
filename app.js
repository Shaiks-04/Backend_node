const express =require('express')
const app=express()
const env =require('dotenv')
const bcrypt=require('bcrypt')
app.use(express.json())
const jwt=require("jsonwebtoken")

env.config()

const users=[]
app.use("/send-reset",(req,res)=>{
    const{email}=req.body
    if(email){
        // const user=null
        const user={
            __id:"1",
            email:"shaik@gmail.com",
            userNme:"shaik",
            pwd:"Test", 
        }
        if(user){
            // res.send({
            //     success:"No user exists"
            // })
            const secret=user.__id + process.env.SECRETKEY
            //create the link using which you can fetch the userdata
            const token=jwt.sign({userId:user.__id},secret,{EXPIREIN:"2m"})
            const link=`http://127.0.0.2.3000/api/user/reset/${user.__id}/${token}`
            res.send({
                "success":"Succesful"
            })
    }
    else{
        res.send({
            email:email,
            message:"email is required "
        })
    }
    }else{
        res.send({
            "failure":"email reset"
        })
    }
})

// app.use("/reset-user-password:__id/token"),async (req,res)=>{
//     console.log("console reached here")
//     const {newpwsd,confmpswd}=req.body
//     if(newpwsd&&confmpswd){
//         if(newpwsd!==confmpswd){
//             res.send({
//                 "failure":"it does not match"
//             })
//         }else{
//             const {__id,token}=req.params
//             const user={
//                 __id:"1",
//                 email:"shaik@gmail.com",
//                 userNme:"shaik",
//                 pwd:"Test", 
//             } 
//             const newSecret=__id + process.env.SECRETKEY
//             try{
//                 jwt.verify(token,newSecret)
//                 const salt=await bcrypt.gensalt(10)
//                 const newhashedpswd=await bcrypt.hash(newpwsd,salt)
//                 user.pwd=newhashedpswd
//                 console.log(user)
//                 res.send({
//                     "success":"password updated succesfully"
//                 })
//             }catch{
//                 res.send({
//                     "message":"something went wrong"
//                 })
//             }
//         }
//         }else{
//             res.send({
//                 "failure":"Either pswd missing"
//             })
//         }
//     }

app.use("/reset-user-password/:__id/token", async (req, res) => {
    console.log("console reached here");
    const { newpwsd, confmpswd } = req.body;
    if (newpwsd && confmpswd) {
      if (newpwsd !== confmpswd) {
        res.send({
          "failure": "Passwords do not match"
        });
      } else {
        const { __id, token } = req.params;
        const user = {
          __id: "1",
          email: "shaik@gmail.com",
          userNme: "shaik",
          pwd: "Test",
        };
        const newSecret = __id + process.env.SECRETKEY;
        try {
          jwt.verify(token, newSecret);
          const salt = await bcrypt.genSalt(10);
          const newhashedpswd = await bcrypt.hash(newpwsd, salt);
          user.pwd = newhashedpswd;
          console.log(user);
          res.send({
            "success": "Password updated successfully"
          });
        } catch (error) {
          res.send({
            "message": "Something went wrong"
          });
        }
      }
    } else {
      res.send({
        "failure": "Missing password"
      });
    }
  });
  
const port=process.env.PORT
app.listen(3000,()=>{
    console.log('server is running')
})







// const bodyparser =require('body-parser')
// const app=express()
// const users=[
//     {
//         __id:1,
//         email:"shaik@gmail.com",
//         userNme:"shaik",
//         pwd:"Test",
//         token:"guhdgcugbdscugcujgbjgbujgdsugujdcsxujy"

//     }
// ]

// app.use("/reset-pwd",(req,res)=>{
//     const{email}=req.body;
//     const user=
//     {
//         __id:1,
//         email:"shaik@gmail.com",
//         userNme:"shaik",
//         pwd:"Test",
//         token:"guhdgcugbdscugcujgbjgbujgdsugujdcsxujy"

//     }
//     if(email){
//         const secret=user.__id + Process.env.SECRETKEY
//         const link=""
//     }else{
//         res.send({
//             "failure":"Email is required"

//         })
//     }
// })

// app.listen(3000)