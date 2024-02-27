const connectDB = require("./connection")
const express = require("express")
require("dotenv").config()


connectDB(process.env.DATABASE_URL)
