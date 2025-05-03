const mongodb=require('mongoose');

const classSchema= new mongodb.Schema({
    title:{
        type:String,
        required: true
    },
    description:{
        type:[String],
        required: true
    },
    quiz:{
        type:[String],
        required: true
    }
})
module.exports= mongodb.model('Class',classSchema);