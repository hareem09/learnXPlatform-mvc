const mongodb=require('mongoose');

const courseSchema= new mongodb.Schema({
    course:{
        type:String,
        required: true
    },
    teacher:{
        type:String,
        required: true
    }
})

module.exports= mongodb.model('Course',courseSchema);