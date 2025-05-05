const mongodb = require('mongoose');

const userSchema= new mongodb.Schema({
    student:{
        type:String,
        required:true,
         timestamp:true
    },
    password:{
     type:[String],
     required:true,
     timestamp:true
    }
    
})
module.exports=mongodb.model('student',userSchema)
