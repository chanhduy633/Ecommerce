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



const port = process.env.PORT || 8005;


if(process.env.NODE_ENV == "production"){
    app.use(express.static("client/build"));
}

app.listen(port,()=>{
    console.log(`Server đang chạy trên port: ${port} `);
});

DefaultData();