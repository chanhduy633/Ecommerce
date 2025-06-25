const express = require("express");
const router = new express.Router();
const Products = require("../models/productsSchema");



router.get("/getproducts", async (req, res) => {
    try {
        const producstdata = await products.find();
        console.log(producstdata + "data mila hain");
        res.status(201).json(producstdata);
    } catch (error) {
        console.log("error" + error.message);
    }
});








module.exports = router;