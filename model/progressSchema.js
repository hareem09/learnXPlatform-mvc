const mongodb=require('mongoose')

const progressSchema= new mongodb.Schema({
    studentId:{
            type: mongodb.Schema.Types.ObjectId,
            ref:'student',
             required: true
    
        },
    classId:{
         type: mongodb.Schema.Types.ObjectId,
                ref:'class',
                required: true
    },
    status:{
        type:String,
        enum:['completed','incomplete'],
        default:'completed',
        required:true,
        timestamp:true
    }
})
module.exports=mongodb.model('progress',progressSchema)
