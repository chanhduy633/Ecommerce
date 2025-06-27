const express = require("express");
const router = new express.Router();
const Products = require("../models/productsSchema");
const User = require("../models/userSchema");
const bcrypt = require("bcryptjs");
const authenicate = require("../middleware/authenticate");

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

router.post("/login", async (req, res) => {
    // console.log(req.body);
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400).json({ error: "Vui lòng điền đầy đủ thông tin" });
    }

    try {

        const userlogin = await User.findOne({ email: email });
        console.log(userlogin);
        if (userlogin) {
            const isMatch = await bcrypt.compare(password, userlogin.password);
            console.log(isMatch);



            if (!isMatch) {
                res.status(400).json({ error: "Thông tin đăng nhập không hợp lệ" });
            } else {
                
                const token = await userlogin.generatAuthtoken();
                console.log(token);

                res.cookie("eccomerce", token, {
                    expires: new Date(Date.now() + 2589000),
                    httpOnly: true
                });
                res.status(201).json(userlogin);
                // res.status(201).json({ message: "Đăng nhập thành công" });

            }

        } else {
            res.status(400).json({ error: "Người dùng không tồn tại" });
        }

    } catch (error) {
        res.status(400).json({ error: "Thông tin đăng nhập không hợp lệ" });
        console.log("Lỗi trong quá trình đăng nhập: " + error.message);
    }
});

router.post("/addcart/:id", authenicate, async (req, res) => {

    try {
        console.log("perfect 6");
        const { id } = req.params;
        const cart = await Products.findOne({ id: id });
        console.log(cart + "Đã tìm thấy giỏ hàng");

        const Usercontact = await User.findOne({ _id: req.userID });
        console.log(Usercontact + "Đã tìm thấy người dùng");


        if (Usercontact) {
            const cartData = await Usercontact.addcartdata(cart);

            await Usercontact.save();
            console.log(cartData + " dữ liệu giỏ hàng đã được lưu, vui lòng đợi...");
            console.log(Usercontact + "người dùng đã được lưu");
            res.status(201).json(Usercontact);
        }
    } catch (error) {
        console.log(error);
    }
});

router.get("/cartdetails", authenicate, async (req, res) => {
    try {
        const buyuser = await User.findOne({ _id: req.userID });
        console.log(buyuser + "người dùng này đang ở trang mua hàng");
        res.status(201).json(buyuser);
    } catch (error) {
        console.log(error + "lỗi khi mua hàng ngay bây giờ");
    }
});

router.get("/remove/:id", authenicate, async (req, res) => {
    try {
        const { id } = req.params;

        req.rootUser.carts = req.rootUser.carts.filter((curel) => {
            return curel.id != id
        });

        req.rootUser.save();
        res.status(201).json(req.rootUser);
        console.log("Sản phẩm đã được xóa");

    } catch (error) {
        console.log(error + "lỗi khi xóa sau khi cung cấp JWT");
        res.status(400).json(error);
    }
});


router.get("/logout", authenicate, async (req, res) => {
    try {
        req.rootUser.tokens = req.rootUser.tokens.filter((curelem) => {
            return curelem.token !== req.token
        });

        res.clearCookie("eccomerce", { path: "/" });
        req.rootUser.save();
        res.status(201).json(req.rootUser.tokens);
        console.log("gười dùng đã đăng xuất");

    } catch (error) {
        console.log(error + "lỗi khi đăng xuất sau khi cung cấp JWT");
    }
});

router.get("/validuser", authenicate, async (req, res) => {
    try {
        const validuserone = await User.findOne({ _id: req.userID });
        console.log(validuserone + "người dùng này đang ở tiêu đề trang chủ");
        res.status(201).json(validuserone);
    } catch (error) {
        console.log(error + "lỗi khi xác thực người dùng");
    }
});


module.exports = router;