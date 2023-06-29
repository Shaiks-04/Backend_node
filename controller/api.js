const express =require('express')
const app=express()
app.use(express.json())

const users=[]
app.use("/resetpw",(req,res)=>{
    const{email}=req.body
    if(email){
        // const user={
        //     __id:"1",
        //     email:"nikitha@gmail.com",
        //     userName:"nikitha",
        //     pwd:"Test",
           
        // }
        if(user){
            res.send({
                success:"No user exists"
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

//code....

// const {newPassword, confNewPassword} = req.body
//     if(newPassword && confNewPassword){
//         if(newPassword !== confNewPassword){
//             res.send({
//                 "failure":"Fields do not match"
//             })
//         }else{
//            const {_id,token} = req.params
//            const user = {
//                 _id:"1",
//                 email:"sudhanshukumar8816@gmail.com",
//                 password:"Test@123",
//            }
//            const newSecret = _id+ process.env.JWT_SECRET_KEY

//            try{
//                 jwt.verify(token,newSecret)
//                 const salt = await bcrypt.genSalt(10)
//                 const newHashedPassword = await bcrypt.hash(newPassword,salt)
//                 user.password = newHashedPassword
//                 console.log(user)
//                 res.send({
//                     "success":"password updated successfully"
//                 })