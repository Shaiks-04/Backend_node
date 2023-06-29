const {newPassword, confNewPassword} = req.body
    if(newPassword && confNewPassword){
        if(newPassword !== confNewPassword){
            res.send({
                "failure":"Fields do not match"
            })
        }else{
           const {_id,token} = req.params
           const user = {
                _id:"1",
                email:"sudhanshukumar8816@gmail.com",
                password:"Test@123",
           }
           const newSecret = _id+ process.env.JWT_SECRET_KEY

           try{
                jwt.verify(token,newSecret)
                const salt = await bcrypt.genSalt(10)
                const newHashedPassword = await bcrypt.hash(newPassword,salt)
                user.password = newHashedPassword
                console.log(user)
                res.send({
                    "success":"password updated successfully"
                })