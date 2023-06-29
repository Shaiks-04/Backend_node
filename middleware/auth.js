// const jwt=require("jsonwebtoken");
// const secretkey="authorization_API";

// const jsontoken=(items,statuscode,res)=>{
//     const user=items.email;
//     const token =jwt.sign({user:items.email},secretkey);

//     res.status(statuscode).send({
//         msg:"user logged in",
//         token:token
//     })
// }

// module.exports=jsontoken
const jwt=require("jsonwebtoken");
const secretkey="authorization_API";

const jsontoken=(items,statuscode,res)=>{
    const user=items.email;
    const token =jwt.sign({user:items.email},secretkey);

    res.status(statuscode).send({
        msg:"successed!!!",
        token:token
    })
}

module.exports=jsontoken