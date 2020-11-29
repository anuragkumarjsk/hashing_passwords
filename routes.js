const express = require('express')
const bcrypt = require('bcrypt')
const router = express.Router()
const model = require('./model')


router.get('/',(req,res)=>{
    res.send("successful")
})


router.post("/addrecords",(req,res)=>{
        var payload = req.body
        
        var a =payload.id 
        var b =payload.name
        var c =payload.password
        var d =payload.password_hash

        var hashPassword = async function(){
          // console.log(bcrypt.hash(c,10));
          var hashPwd = await bcrypt.hash(c,10);
          return hashPwd
        }

      hashPassword().then((hashPwd)=>{
          var pp = {id:a,name:b,password:c,password_hash:hashPwd}
          // console.log("a"+a,"b"+b,"c"+c,"d"+hashPwd)
          const newinstance = new model(pp)
          newinstance.save()
          .then((d)=>{console.log('successfully added record'+d)})
          .catch(()=>{console.log('unable to add record')})
      })
}
)

router.get("/findrecords",(req,res)=>{
  console.log(req.body)
      //  var payload = req.body
      //  console.log(payload)
      //  var username = payload.name
      //  var password = payload.password

      let username = "Deeksha"
      let password = "Aishwarya"
       console.log(username)
       model.find({'name':username})
       .then((user)=>{
        //console.log(user) 
        let stored_hash = user.password_hash
        let result = bcrypt.compare(password,stored_hash).then((d)=>{console.log(d)})
        if(result)
        {console.log("match found")}
        else
        {console.log("match not found")}
      })
       .catch((err)=>{
         console.log("error is"+err)
       })

})



module.exports = router