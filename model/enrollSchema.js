const mongoose = require('mongoose');
// mongoose.connect('mongoose://localhost:27017/data')
const enrollSchema= new mongoose.Schema({
    courseId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'course',
        required: true
    },
    studentId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'student',
         required: true

    },
    status:{
        type:String,
        enum:['enrolled','completed','dropped'],
        default:'enrolled',
        required:true,
        timestamp:true
    }
})

module.exports= mongoose.model('enroll',enrollSchema);
