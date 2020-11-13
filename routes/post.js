
router.post('/addcontact/:city/:phone',(req,res)=>{
    const {city,phone}=req.params
    const {name}=req.body

    if(name=="Amit")
    {
        return res.status(202).json({
              name,
              city,
              phone

        })
    }
    else{
        return res.json({error:"cannot be processsed"})
    }
   

    
   
})