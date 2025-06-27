require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

require("./db/conn");

const Products = require("./models/productsSchema");
const DefaultData = require("./defaultdata");
const cors = require("cors");
const router = require("./routers/router");



app.use(express.json());
app.use(cookieParser(""));

app.use(cors());
app.use("/", router);



const port = 8005;
app.listen(port,()=>{
    console.log(`Server đang chạy trên port: ${port} `);
});

DefaultData();