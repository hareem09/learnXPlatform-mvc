const mongodb=require('mongoose');

const courseSchema= new mongodb.Schema({
     course:{
        type:String,
        required: true,
        timestamp:true
    },
    teacher:{
        type:String,
        required: true,
        timestamp:true
    },
    userId:{
        type:mongodb.Schema.Types.ObjectId,
        ref:'student',
        required:true   
    }
})

module.exports= mongodb.model('course',courseSchema);
