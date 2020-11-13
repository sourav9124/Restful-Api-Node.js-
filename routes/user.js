const express=require('express')
const router=express.Router()
const mongoose=require('mongoose')
const User=mongoose.model('User')


//first api isthe get api
//post 

router.post('/Signup',(req,res)=>{
    // const name=req.body.name
    // const email=req.body.email
    // const password=req.body.password

    const {name,email,password}=req.body
    //console.log(name+email+password);
    const user=new User({
        name,
        email,
        password

                           
    })
    user.save()
    .then(userdata=>{
        console.log(userdata)
        res.json("Data Inserted Successfully !")
    })
    .catch(err=>{
        console.log(err);
    })
})

//patch ==>to update small chunk of data    
//put ==>to update large amount of data    
router.get('/Signin',(req,res)=>{
    
     const email1=req.body.email
     const password1=req.body.password
     console.log(email1+password1);
     
    User.findOne({email:email1})
    .exec()
    .then(user=>{
       

          
        if(email1==user.email && password1 ==user.password)
        {
            console.log("Logged in!");
            res.json("Logged in")
        }
      
    }).catch(err=>{
        console.log(err);
    })


})

router.patch('/update/:id',(req,res)=>{

        
    const id=req.params.id
    console.log(id);
    const {name,email,password}=req.body
    
    User.findById({_id:id})
    
    .then(data=>{
        console.log(data);

        
            data.name=name,
            data.email=email,
            data.password=password
        


        
        data.save()
        .then(result=>{
           
            console.log("Updated record is "+result);
            res.json(result)
        })

          
    }).catch(err=>{
        console.log(err);
    })
})


router.post('/addnumbers',(req,res)=>{
    console.log(req.body)
    const {first,second}=req.body
    // console.log(first)         
     const a=parseInt(first)
     const b=parseInt(second)
     console.log(a+b)

    if(a<=0 || b<=0)
    {
        return res.status(404).json({error:"number must be greated than 0 !"})
    }
    const sum=a+b

    return res.status(200).json({message: "The result of two numbers "+sum})

    

})




module.exports=router