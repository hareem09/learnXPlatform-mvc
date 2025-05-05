const mongodb=require('mongoose');

const classSchema= new mongodb.Schema({
    title:{
        type:String,
        required: true,
        timestamp:true
    },
    description:{
        type:[String],
        required: true,
        timestamp:true
    },
    quiz:{
        type:[String],
        required: true,
        timestamp:true
    }
})
module.exports= mongodb.model('Class',classSchema);
