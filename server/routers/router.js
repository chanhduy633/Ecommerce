const express = require("express");
const router = new express.Router();
const Products = require("../models/productsSchema");
const User = require("../models/userSchema");
const bcrypt = require("bcryptjs");

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

router.post("/register", async (req, res) => {
    // console.log(req.body);
    const { fname, email, mobile, password, cpassword } = req.body;

    if (!fname || !email || !mobile || !password || !cpassword) {
        res.status(422).json({ error: "Vui lòng điền đầy đủ thông tin" });
        console.log("Vui lòng điền đầy đủ thông tin");
    };

    try {

        const preuser = await User.findOne({ email: email });

        if (preuser) {
            res.status(422).json({ error: "Email này đã tồn tại" });
        } else if (password !== cpassword) {
            res.status(422).json({ error: "Mật khẩu không khớp" });;
        } else {

            const finaluser = new User({
                fname, email, mobile, password, cpassword
            });


            const storedata = await finaluser.save();
            // console.log(storedata + "user successfully added");
            res.status(201).json(storedata);
        }

    } catch (error) {
        console.log("Lỗi đăng ký" + error.message);
        res.status(422).send(error);
    }

});

module.exports = router;