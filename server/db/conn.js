const mongoose = require("mongoose");

const DB = process.env.DATABASE;

mongoose.connect(DB).then(()=>console.log("Kết nối database thành công")).catch((error)=>console.log("Lỗi:" + error.message))