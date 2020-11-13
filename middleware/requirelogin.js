const requireLogin=(req,res,next)=>{
    const {authorization}=req.headers
    if(!authorization)
    {
        return res.status(401).json("You are not logged in !!")
    }
     const token=authorization.replace('Bearer ',"")
     jwt.verify(token,JWT_SECRET,(err,payload)=>{
         if(err)
         {
             console.log(err);
         }
         const {id}=payload

         Signup.findById(id)
         .then(userdata=>{
             req.user=userdata
         }).catch(err=>{
             console.log(err);
         })
     })


}