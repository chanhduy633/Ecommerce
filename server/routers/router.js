const express = require("express");
const router = new express.Router();
const Products = require("../models/productsSchema");



router.get("/getproducts", async (req, res) => {
    try {
        const producstdata = await Products.find();
        res.status(201).json(producstdata);
    } catch (error) {
        console.log("error" + error.message);
    }
});



router.get("/getproductsone/:id", async (req, res) => {

    try {
        const { id } = req.params;
        console.log(id);

        const individual = await Products.findOne({ id: id });
        console.log(individual + "Đã nhận được");

        res.status(201).json(individual);
    } catch (error) {
        res.status(400).json(error);
    }
});

module.exports = router;