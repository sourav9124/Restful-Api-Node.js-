const checkName=(req,res,next)=>{
    const flag=false

    const name =req.body.name

    if(name=="Amit")
    {
        console.log("Successfully verified !");
        flag=true

        
    }
    else{
        return res.jon("Error while validation")
    }
    next()
}