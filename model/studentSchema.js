const mongodb = require('mongoose');

const studentSchema= new mongodb.Schema({
    student:{
        type:String,
        required:true
    },
    password:{
     type:[String],
     required:true
    }
})
module.exports=mongodb.model('student',studentSchema)