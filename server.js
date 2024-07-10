//ES5 throughout
const express = require("express")
const cors = require('cors')
const mongoose = require("mongoose")
//const User = require('./user')
const User = require("./user")
const app = express()
const path = require("path")
const dotenv = require("dotenv")
const port = 5000
app.use(express.json())

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname,'public'))); //ES5
app.use(express.urlencoded({ extended: true }));

dotenv.config()

const uri = 'mongodb://localhost:27017/Client'



mongoose.connect(process.env.DB_URL ,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to MongoDB');
    app.listen(port,()=>{
        console.log('Server is running')
    })
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });


  app.get('/',(req,res)=>{
     
    res.render('index')
    
  })

app.post('/user',async (req,res)=>{
    const  { firstName, lastName,email,phone,message}= req.body
    try{
        const newUser =await User.create({
            firstName,
            lastName,
            email,
            phone,
            message
        })
        res.json(newUser)
    }catch(e){
        res.status(405).json({ error: 'Registration failed. Please try again.' })
    }

})

