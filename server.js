const express = require('express');
const dotenv = require('dotenv');
const connectDB =  require('./config/db');
const authRoutes = require('./routes/authRoutes');

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.json());
app.use('/api/auth' , authRoutes);

app.get('/' , (req , res) => res.send("Hello World"));

app.listen(PORT , ()=>{
    console.log(`Server is running on Port : ${PORT}`)
})