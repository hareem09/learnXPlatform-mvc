const express=require('express')
const app= express()
const mongodb=require('mongoose')
//classContent
const classModel=require('./model/classSchema')
const classRouter=require('./routes/class')
//Course
const courseModel=require('./model/courseSchema')
const courseRouter=require('./routes/course')
//Enrollment
const enrollModel=require('./model/enrollSchema')
const enrollRouter=require('./routes/enroll')
//Progress
const progressModel=require('./model/progressSchema')
const progressRouter=require('./routes/progress')
//Student
const studentModel=require('./model/studentSchema')
const studentRouter=require('./routes/student')

app.use(express.json())

mongodb.connect('mongodb://localhost:27017/learnXPlatform')
const port=3000

app.use('/student',studentRouter)

app.use('/progress',progressRouter)

app.use('/enroll',enrollRouter)

app.use('/class',classRouter)

app.use('/course',courseRouter)

app.listen(port,(req,res)=>{
    console.log(`server is running at port${port}`)
})
