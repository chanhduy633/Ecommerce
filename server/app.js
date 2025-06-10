require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 5007;


app.listen(port,()=>{
    console.log(`your server is running on port ${port} `);
});

