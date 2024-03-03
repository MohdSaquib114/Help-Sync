const connectDB = require("./connection")
const express = require("express")
require("dotenv").config();
const route = require("./routes/route");
const app = express();
connectDB(process.env.DATABASE_URL)

// app.use(express.json());

app.use('/api/v1', route)

app.listen(process.env.PORT, ()=> {
    console.log(`Port is listening`);
})



